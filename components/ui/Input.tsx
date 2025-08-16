import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import { AiOutlineExclamationCircle } from 'lucide-react';

interface InputProps {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  validationPattern?: RegExp;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  placeholder,
  type = 'text',
  required = false,
  validationPattern,
}) => {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="mb-6">
      <motion.div
        htmlFor={name}
        className="block text-orange-500 font-semibold mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {label}
      </motion.label>
      <motion.div
        className="relative"
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <input
          id={name}
          type={type}
          className={clsx(
            'w-full px-4 py-3 rounded-lg shadow-md outline-none border border-orange-200',
            'focus:ring-2 focus:ring-orange-400 transition-all duration-300',
            {
              'border-red-500': errors[name],
            },
            'bg-white text-orange-700 placeholder-orange-300'
          )}
          placeholder={placeholder}
          {...register(name, {
            required: required ? 'This field is required' : false,
            pattern: validationPattern
              ? {
                  value: validationPattern,
                  message: 'Invalid format',
                }
              : undefined,
          })}
        />
        {errors[name] && (
          <span className="absolute right-3 top-3 text-red-500">
            <AiOutlineExclamationCircle />
          </span>
        )}
      </motion.div>
      {errors[name] && (
        <motion.span
          className="text-red-500 text-sm mt-1 flex items-center"
          initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {errors[name].message}
        </motion.span>
      )}
    </div>
  );
};

export default Input;

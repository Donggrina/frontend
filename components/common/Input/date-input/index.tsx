import React, { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './date-input.module.scss';
import { CustomRegister } from '@/utils/validations/validate-date';

interface FormInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name?: string;
  type?: string;
}

export default function DateInput({ label, type = 'text' }: FormInput) {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedValue = value.replace(/[^0-9]/g, '');
    if (value !== formattedValue) {
      e.target.value = formattedValue;
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <span>|</span>
        <label htmlFor={label}>{label}</label>
      </div>
      <div className={styles.inputContainer}>
        <input
          className={`${styles.input} ${styles.year}`}
          id="year"
          type={type}
          placeholder="YYYY"
          {...CustomRegister({ register, type: 'year' })}
          onBlur={() => trigger('year')}
          onInput={handleInput}
        />
        <span>-</span>
        <input
          className={`${styles.input} ${styles.month}`}
          id="month"
          type={type}
          placeholder="MM"
          {...CustomRegister({ register, type: 'month' })}
          onBlur={() => trigger('month')}
          onInput={handleInput}
        />
        <span>-</span>
        <input
          className={`${styles.input} ${styles.day}`}
          id="day"
          type={type}
          placeholder="DD"
          {...CustomRegister({ register, type: 'day' })}
          onBlur={() => trigger('day')}
          onInput={handleInput}
        />
      </div>
      {(errors.year || errors.month || errors.day) && (
        <p className={styles.error}>
          {(errors.year?.message || errors.month?.message || errors.day?.message) as string}
        </p>
      )}
    </div>
  );
}

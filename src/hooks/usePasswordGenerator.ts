import { useState, useEffect } from 'react';

export type PasswordOptionKeys = 'lowercase' | 'uppercase' | 'specialSymbols' | 'numbers';
type PasswordOptions = Record<PasswordOptionKeys, boolean>;

const CHARS: Record<PasswordOptionKeys, string> = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  specialSymbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
  numbers: '0123456789',
};

const DEFAULT_OPTIONS: PasswordOptions = {
  lowercase: true,
  uppercase: false,
  specialSymbols: false,
  numbers: false,
};

const PASSWORD_LENGTH = 20;

export const usePasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [options, setOptions] = useState<PasswordOptions>(DEFAULT_OPTIONS);

  const getAvailableChars = (opts: PasswordOptions): string => {
    let chars = '';
    if (opts.lowercase) chars += CHARS.lowercase;
    if (opts.uppercase) chars += CHARS.uppercase;
    if (opts.specialSymbols) chars += CHARS.specialSymbols;
    if (opts.numbers) chars += CHARS.numbers;
    return chars || CHARS.lowercase;
  };

  const generatePassword = () => {
    const availableChars = getAvailableChars(options);
    let newPassword = '';
    for (let i = 0; i < PASSWORD_LENGTH; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      newPassword += availableChars[randomIndex];
    }
    setPassword(newPassword);
  };

  const copyPassword = async () => {
    try {
      await navigator.clipboard.writeText(password);
    } catch (err) {
      console.error('Failed to copy password:', err);
    }
  };

  const updateOption = (key: PasswordOptionKeys, value: boolean) => {
    setOptions(prev => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    generatePassword();
  }, []);

  return {
    password,
    options,
    generatePassword,
    copyPassword,
    updateOption,
  };
};

import './PasswordGenerator.scss';
import { useEffect, useState } from 'react';

const PASSWORD_LENGTH = 20;

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [options, setOptions] = useState({
    lowercase: true,
    uppercase: false,
    specialSymbols: false,
    numbers: false,
  });

  useEffect(() => {
    generatePassword();
  }, []);

  const generatePassword = () => {
    const chars = {
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      specialSymbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
      numbers: '0123456789',
    };

    let availableChars = '';
    if (options.lowercase) availableChars += chars.lowercase;
    if (options.uppercase) availableChars += chars.uppercase;
    if (options.specialSymbols) availableChars += chars.specialSymbols;
    if (options.numbers) availableChars += chars.numbers;

    if (availableChars === '') availableChars = chars.lowercase;

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

  return (
    <div className={'password-generator'}>
      <div className={'password-generator__input'}>
        <input className={'input-password'} type="text" value={password} readOnly />
        <div className={'controls'}>
          <button className={'btn-generate'} onClick={generatePassword}>
            <img src="src/assets/icons/ic_refresh-arrow.svg" alt="Generate" />
          </button>
          <button className={'btn-copy-password'} onClick={copyPassword}>
            Copy Password
          </button>
        </div>
      </div>

      <div className={'password-generator__options'}>
        <label className={'option'}>
          <input
            type="checkbox"
            checked={options.lowercase}
            onChange={e => setOptions({ ...options, lowercase: e.target.checked })}
          />
          <span>lower case</span>
        </label>
        <label className={'option'}>
          <input
            type="checkbox"
            checked={options.uppercase}
            onChange={e => setOptions({ ...options, uppercase: e.target.checked })}
          />
          <span>upper case</span>
        </label>
        <label className={'option'}>
          <input
            type="checkbox"
            checked={options.specialSymbols}
            onChange={e => setOptions({ ...options, specialSymbols: e.target.checked })}
          />
          <span>special symbols</span>
        </label>
        <label className={'option'}>
          <input
            type="checkbox"
            checked={options.numbers}
            onChange={e => setOptions({ ...options, numbers: e.target.checked })}
          />
          <span>numbers</span>
        </label>
      </div>
    </div>
  );
};

export default PasswordGenerator;

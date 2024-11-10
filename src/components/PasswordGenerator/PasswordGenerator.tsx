import './PasswordGenerator.scss';
import { useState } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('8Gx&kc2yd%CPnw');
  const [options, setOptions] = useState({
    lowercase: true,
    uppercase: false,
    specialSymbols: false,
    numbers: false,
  });

  return (
    <div className={'password-generator'}>
      <div className={'password-generator__input'}>
        <input className={'input-password'} type="text" value={password} readOnly />
        <button className={'btn-generate'}>
          <img src="src/assets/icons/ic_refresh-arrow.svg" alt="Generate" />
        </button>
        <button className={'btn-copy-password'}>Copy Password</button>
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

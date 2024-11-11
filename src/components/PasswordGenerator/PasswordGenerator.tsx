import './PasswordGenerator.scss';
import { usePasswordGenerator, PasswordOptionKeys } from 'hooks/usePasswordGenerator.ts';

const PasswordGenerator = () => {
  const { password, options, generatePassword, copyPassword, updateOption } =
    usePasswordGenerator();

  return (
    <div className={'password-generator'}>
      <div className={'password-generator__input'}>
        <input className={'input-password'} type="text" value={password} readOnly />
        <div className={'controls'}>
          <button className={'btn-generate'} onClick={generatePassword}>
            <img src={'public/icons/ic_refresh-arrow.svg'} alt="Generate" />
          </button>
          <button className={'btn-copy-password'} onClick={copyPassword}>
            Copy Password
          </button>
        </div>
      </div>

      <div className="password-generator__options">
        {Object.keys(options).map(key => (
          <label key={key} className="option">
            <input
              type="checkbox"
              checked={options[key as PasswordOptionKeys]}
              onChange={e => updateOption(key as PasswordOptionKeys, e.target.checked)}
            />
            <span>{key.replace(/([A-Z])/g, ' $1').toLowerCase()}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default PasswordGenerator;

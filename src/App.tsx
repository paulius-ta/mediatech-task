import 'styles/global.scss';
import PasswordGenerator from 'components/PasswordGenerator/PasswordGenerator.tsx';

function App() {
  return (
    <>
      <header className={'header'}>
        <div className={'header__content'}>
          <img src={'src/assets/icons/ic_cb-logo.svg'} className={'logo'} alt="Logo" />
        </div>
      </header>

      <main className={'page-content'}>
        <p className={'disclaimer'}>
          Our readers help us create quality content. If you purchase via links on our site, we may
          receive affiliate commissions. <a href={'/'}>Learn more</a>
        </p>

        <section className={'password-generator-section'}>
          <h1>Generate strong passwords</h1>
          <p>Upgrade the security of your online accounts.</p>
          <p>Create strong passwords that are completely random and impossible to guess.</p>
          <div className={'password-generator-wrapper'}>
            <PasswordGenerator />
          </div>
        </section>

        <section className={'what-it-is-section'}>
          <figure className={'what-it-is-section__figure'}>
            <img src="src/assets/icons/ic_password-generator.svg" alt="Password generator" />
          </figure>
          <div className={'what-it-is-section__body'}>
            <h2>What is a password generator?</h2>
            <p>
              A password generator is a tool that automatically generates strong, secure passwords.
              With its help, you don’t need to come up with your own passwords ever again.
            </p>
            <p>
              A single mouse click will generate you a sequence of random symbols. Copy and use it
              as a password for your device, email, social media account, or anything else that
              requires restricted access.
            </p>
            <p>
              Also, don’t use the same password for more than one account. Each time you need to
              sign up, create a new password using this free password generator. In this way, your
              data will be safer than ever before.
            </p>
          </div>
        </section>

        <section className={'how-it-works-section'}>
          <figure className={'how-it-works-section__figure'}>
            <img src="src/assets/icons/ic_password-strength.svg" alt="Password strength" />
          </figure>
          <div className={'how-it-works-section__body'}>
            <h2>How does our password generator tool work?</h2>
            <p>
              To create a truly unique character combination, this online password generator tool
              goes through random sequences of 26 uppercase letters, 26 lowercase letters, 10
              numeric digits, and 32 special symbols. The result is a unique 12-character sequence.
              This number of characters makes your future password downright unbreakable, taking 1.4
              billion years for a brute-force attack to crack it.
            </p>
            <p>
              This free password generator is compatible with Windows, Linux, and Mac operating
              systems, as well as with Android and iOS devices.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

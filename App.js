
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='logo-box'>
        <img src="./Logo_Twitter.png" alt="Logo_Twitter" className="Logo_Twitter" />
        <h2>Sign In to Twitter</h2>
        <button>
          <img src="./google.png" alt="Logo_Twitter" />
            Sign in with Google
        </button>
        <button>
          <img src="./apple.png" alt="Logo_Twitter" />
            Sign in with Google
        </button>

        <hr></hr>
        <span>Or</span>

        <form>
          <input type="text" placeholder="Phone email or username" />
          <button>Next</button>
        </form>

        <button>Forget Password</button>
        <p>Don't Have an account <a>Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default App;

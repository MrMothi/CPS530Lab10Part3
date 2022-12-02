import logo from './logo.svg';
import './App.css';

// CPS530 Lab10 Problem C    Mohit Sharma    501105077	  November 28th 2022

function App() {
  	return (
        <div className="App">
            <h1>CPS530 Lab10 Problem 3</h1>
            <div className="main">
                <div>
                    <p>
                        I have used <b>ReactJS</b> for problem 3
                    </p>
                    <p className="text">
                        Creating the ReactJS application required several steps,
                        though these were not difficult to do. First I needed to
                        install NodeJS on my computer. After doing this I opened
                        a new folder, then opened it with VScode. Using the
                        internal terminal of VScode I ran the command <code>npx 
						create-react-app lab10react</code> to automatically
						create the React dependencies and a starter template for
						the React webpage. 
                    </p>
					<p className='text'>
						Moving on to developing the webpage, this was very straitforward
						and easy to learn. This was due to the familiar HTML CSS and JS
						to be used, and also not needing to use react hooks or any other
						react related tools for this lab. It basically was like developing
						any other html webpage and using the <code>npm start</code> command to
						have a live output of my changes was another bonus, (like how VScode
						has live server).
					</p>
					<p className='text'>Some difficulties I faced while creating the React
						webpage was finding the resources to understand how to begin and 
						set up a react app and how to upload it to a server. To deal with
						these issues I found videos and forums covering how to do these things.
						I also watched some videos about programming with ReactJS to help me 
						code the simple webpage.
					</p>
                </div>
                <div>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p className="text">
                        This is the default React App Spinning Logo
                    </p>
                </div>
            </div>
            <div className="linkdiv">
                <a
                    className="App-link"
                    href="http://tmulab.somee.com/default.asp?bgcol=green"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Problem 1
                </a>
                <a
                    className="App-link"
                    href="https://www.cs.ryerson.ca/~m62sharm/lab10b.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Problem 2
                </a>
            </div>
        </div>
    );
}

export default App;

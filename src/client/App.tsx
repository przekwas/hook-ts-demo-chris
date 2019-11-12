import * as React from 'react';
import { useState, useEffect } from 'react';
import { IChirp } from './utils/interfaces';

const App: React.FC<AppProps> = props => {
	const [message, setMessage] = useState<string>('');
	const [userid, setUserid] = useState<string>('');
	const [chirps, setChirps] = useState<IChirp[]>([]);

	useEffect(() => {
		(async () => {
			try {
				let r = await fetch('/api/chirps');
				let chirps = await r.json();
				setChirps(chirps);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.log({ userid, chirp: message });
	};

	return (
		<main className="container">
			<section className="row justify-content-center my-2">
				<div className="col-md-4">
					<form className="form-group p-3 shadow border">
						<label className="font-weight-bold">Userid</label>
						<input value={userid} onChange={e => setUserid(e.target.value)} type="text" className="form-control my-1 shadow-sm" />
						<label className="font-weight-bold">Message</label>
						<input value={message} onChange={e => setMessage(e.target.value)} type="text" className="form-control my-1 shadow-sm" />
						<button onClick={handleSubmit} className="btn btn-primary btn-block shadow mt-3 mx-auto w-75">
							Submit
						</button>
					</form>
				</div>
				<div className="col-md-8">
					<section className="row justify-content-center">
						{chirps.map(chirp => (
							<div key={`chirp-card-${chirp.id}`} className="col-md-12">
								<div className="card my-1 shadow">
									<div className="card-body text-center">
										<h4 className="card-title">{chirp.userid}</h4>
										<p className="card-text">{chirp.chirp}</p>
									</div>
								</div>
							</div>
						))}
					</section>
				</div>
			</section>
		</main>
	);
};

interface AppProps {}

export default App;

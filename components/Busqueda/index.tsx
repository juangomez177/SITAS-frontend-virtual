
import { useAtom } from 'jotai';
import { aeropuertosAtom } from "../../atoms/cart";


interface AirportTypes{
	aeropuerto : {
		nombre: string;
		idCiudad:{
			id:number;
			nombre:string;
			idPais:number;
		};
		id: string;
	  };
	
}

const Index =()=> {
	const [aeropuertos] = useAtom(aeropuertosAtom);
	
    return(
		
			<div id="booking" className="section">
		<div className="section-center">
			<div className="container">
				<div className="row">
					<div className="flex justify-center items-center">
						<div className="booking-cta">
							<h3>Viaja ahora</h3>
							<p>La mejor aerolinea de Singapur y Colombia</p>
						</div>
					</div>
					<ul>
						{aeropuertos.map((aeropuerto:AirportTypes)=>(
						<li key={aeropuerto.aeropuerto.nombre} >${aeropuerto.aeropuerto.nombre}</li>))}							
					</ul>
					<div className="col-md-7 col-md-offset-1">
						<div className="booking-form">
							<form>
								<div className="form-group">
									<div className="form-checkbox">
										<label htmlFor="roundtrip">
											<input type="radio" id="roundtrip" name="flight-type"/>
											<span></span>ida y vuelta
										</label>
										<label htmlFor="one-way">
											<input type="radio" id="one-way" name="flight-type"/>
											<span></span>solo ida
										</label>
										<label htmlFor="multi-city">
											<input type="radio" id="multi-city" name="flight-type"/>
											<span></span>Multiple destino
										</label>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<span className="form-label">Origen</span>
											<input className="form-control" type="text" placeholder="Ciudad o aeropuerto"/>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<span className="form-label">Destino</span>
											<input className="form-control" type="text" placeholder="Ciudad o aeropuerto"/>								
										</div>
										
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
										
											<span className="form-label">F. Salida</span>
											<input className="form-control" type="date" required/>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<span className="form-label">F. Regreso</span>
											<input className="form-control" type="date" required/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-4">
										<div className="form-group">
											<span className="form-label">Adultos (18+)</span>
											<select className="form-control">
												<option>1</option>
												<option>2</option>
												<option>3</option>
											</select>
											<span className="select-arrow"></span>
										</div>
									</div>
									<div className="col-md-4">
										<div className="form-group">
											<span className="form-label">Niños (0-17)</span>
											<select className="form-control">
												<option>0</option>
												<option>1</option>
												<option>2</option>
											</select>
											<span className="select-arrow"></span>
										</div>
									</div>
									<div className="col-md-4">
										<div className="form-group">
											<span className="form-label">Clase Viajera</span>
											<select className="form-control">
												<option>Economica</option>
												<option>Negocios</option>
												<option>Primera clase</option>
											</select>
											<span className="select-arrow"></span>
										</div>
									</div>
								</div>
								<div className="form-btn">
									<button className="submit-btn">Show flights</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

		
		
    )
    
}
export default Index;

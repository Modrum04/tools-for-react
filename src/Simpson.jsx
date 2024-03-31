function Simpson({ usersInformations }) {
  const { email, name, username, phone, website } = usersInformations;
  const { street, suite, city, zipcode } = usersInformations.address;
  const { lat, lng } = usersInformations.address.geo;
  const companyName = usersInformations.company.name;
  const { catchPhrase, bs } = usersInformations.company;

  return (
    <div className="card">
      <h2>User : {name}</h2>
      <p>User Name : {username}</p>
      <p>Email : {email}</p>
      <p>Phone : {phone}</p>
      <p>Website : {website}</p>
      <div>
        <h3>Adress :</h3>
        <ul>
          <li>Street : {street}</li>
          <li>Suite : {suite}</li>
          <li>City : {city}</li>
          <li>Zipcode : {zipcode}</li>
          <h4>Geolocalisation : </h4>
          <ul>
            <li> Latitude : {lat}</li>
            <li> Longitude : {lng}</li>
          </ul>
        </ul>
      </div>
      <div>
        <h3>Company :</h3>
        <ul>
          <li>Name : {companyName}</li>
          <li>Catch phrase : {catchPhrase}</li>
          <li>Business Services : {bs}</li>
        </ul>
      </div>
    </div>
  );
}

export default Simpson;

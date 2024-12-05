import Map from "../OpenStreetMap/ImgMap";
import './overview.scss';

export default function DoctorOverview({ name }: { name: string; }) {
  return (
    <div className="search-results">
      <div className="search-results__banner">
        <section className="doctor-overview">
          <h1 className="single-asset-main-title">{name}</h1>
          <div className="single-asset-main-description">
            <h2>293 doctors available in Chennai</h2>
            <p>Book appointments with minimum wait-time & verified doctor details</p>
          </div>
        </section>
        <section className='divider'></section>
        <section className='search-results_map'>
          <div className="search-results_map--background">
              <Map />
          </div>
        </section>
      </div>
      <div className="divider-horizontal"></div>
    </div>
  );
}

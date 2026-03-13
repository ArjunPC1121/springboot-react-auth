import "../styles/dashboard.css";

function Home(){

  return(

    <div className="dashboard">

      <h1>WealthWise Portfolio Dashboard</h1>

      <div className="stats">

        <div className="card">
          <h3>Total Investment</h3>
          <p>₹ 2,50,000</p>
        </div>

        <div className="card">
          <h3>Current Portfolio Value</h3>
          <p>₹ 3,18,500</p>
        </div>

        <div className="card">
          <h3>Overall CAGR</h3>
          <p>14.8%</p>
        </div>

        <div className="card">
          <h3>XIRR</h3>
          <p>15.6%</p>
        </div>

      </div>


      <div className="portfolio-section">

        <h2>Asset Allocation</h2>

        <div className="allocation">

          <p>Equity Funds: 65%</p>
          <p>Debt Funds: 20%</p>
          <p>Hybrid Funds: 15%</p>

        </div>

      </div>


      <div className="actions">

        <button>Add New Investment</button>
        <button>Track SIP</button>
        <button>View Analytics</button>

      </div>

    </div>

  );

}

export default Home;
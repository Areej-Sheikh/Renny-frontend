import WorldMap from "../components/WorldMap";

export default function MapPage() {
  return (
    <div style={styles.page}>
      

      {/* MAP SECTION */}
      <div style={styles.mapContainer}>
        <WorldMap />
      </div>
 
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#ffffff",
    padding: "40px 60px",
    boxSizing: "border-box"
  },

  header: {
    marginBottom: "30px"
  },

  title: {
    fontSize: "32px",
    fontWeight: "600",
    color: "#05267e",
    marginBottom: "8px"
  },

  subtitle: {
    fontSize: "16px",
    color: "#6a7282"
  },

  mapContainer: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
  }
};
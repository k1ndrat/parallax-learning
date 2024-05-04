import Chain from "@/sections/Chain";
import Community from "@/sections/Community";

const Berachain = () => {
  return (
    <div className="layout">
      <div className="overflow-clip" style={{ backgroundColor: "#15161F" }}>
        <Community />
        <Chain />
      </div>
    </div>
  );
};

export default Berachain;

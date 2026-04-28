import { motion } from "framer-motion";
import tunnelImage from "@/assets/camp nou tunnel.jpg";

const StadiumTunnel = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-black z-0">
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 3, 
          ease: "easeOut",
          opacity: { duration: 1.5 }
        }}
        className="w-full h-full"
      >
        <img
          src={tunnelImage}
          alt="Camp Nou Tunnel"
          className="w-full h-full object-cover opacity-15"
        />
      </motion.div>
    </div>
  );
};

export default StadiumTunnel;

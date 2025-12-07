"use client";

import { motion } from "framer-motion";

export default function BottomSheet({ open, onClose, children, height = "70vh" }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-center items-end"
         onClick={onClose}>
      
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="bg-white w-full rounded-t-2xl p-6 shadow-xl"
        style={{ maxHeight: height, overflowY: "auto" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

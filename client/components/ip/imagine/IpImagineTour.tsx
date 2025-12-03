import { motion, AnimatePresence } from "framer-motion";

type IpImagineTourProps = {
  tourStep: "idle" | "upload-image" | "enter-prompt" | "submit" | "complete";
  uploadButtonRect: DOMRect | null;
  inputRect: DOMRect | null;
  submitButtonRect: DOMRect | null;
  onNext: () => void;
  onSkip: () => void;
};

export const IpImagineTour = ({
  tourStep,
  uploadButtonRect,
  inputRect,
  submitButtonRect,
  onNext,
  onSkip,
}: IpImagineTourProps) => {
  const renderGuideStep = () => {
    if (tourStep === "upload-image" && uploadButtonRect) {
      return (
        <motion.div
          key="upload-guide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 pointer-events-none z-50"
        >
          <motion.div
            className="absolute inset-0 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />

          <motion.div
            className="absolute border-2 border-blue-500 rounded-lg pointer-events-none"
            style={{
              left: uploadButtonRect.left - 8,
              top: uploadButtonRect.top - 8,
              width: uploadButtonRect.width + 16,
              height: uploadButtonRect.height + 16,
            }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(59, 130, 246, 0.7)",
                "0 0 0 20px rgba(59, 130, 246, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />

          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="text-white font-semibold text-lg mb-4 bg-blue-500 px-4 py-2 rounded-lg whitespace-nowrap"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              ↑ Click to upload an image or remix
            </motion.div>
          </motion.div>

          <motion.button
            onClick={onNext}
            className="absolute bottom-8 right-8 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Next Step →
          </motion.button>

          <motion.button
            onClick={onSkip}
            className="absolute bottom-8 left-8 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Skip Guide
          </motion.button>
        </motion.div>
      );
    }

    if (tourStep === "enter-prompt" && inputRect) {
      return (
        <motion.div
          key="prompt-guide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 pointer-events-none z-50"
        >
          <motion.div
            className="absolute inset-0 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />

          <motion.div
            className="absolute border-2 border-blue-500 rounded-lg pointer-events-none"
            style={{
              left: inputRect.left - 8,
              top: inputRect.top - 8,
              width: inputRect.width + 16,
              height: inputRect.height + 16,
            }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(59, 130, 246, 0.7)",
                "0 0 0 20px rgba(59, 130, 246, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />

          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="text-white font-semibold text-lg mb-4 bg-blue-500 px-4 py-2 rounded-lg"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              ↓ Describe what you want to create
            </motion.div>
          </motion.div>

          <motion.button
            onClick={onNext}
            className="absolute bottom-8 right-8 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Next Step →
          </motion.button>

          <motion.button
            onClick={onSkip}
            className="absolute bottom-8 left-8 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Skip Guide
          </motion.button>
        </motion.div>
      );
    }

    if (tourStep === "submit" && submitButtonRect) {
      return (
        <motion.div
          key="submit-guide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 pointer-events-none z-50"
        >
          <motion.div
            className="absolute inset-0 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />

          <motion.div
            className="absolute border-2 border-blue-500 rounded-lg pointer-events-none"
            style={{
              left: submitButtonRect.left - 8,
              top: submitButtonRect.top - 8,
              width: submitButtonRect.width + 16,
              height: submitButtonRect.height + 16,
            }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(59, 130, 246, 0.7)",
                "0 0 0 20px rgba(59, 130, 246, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />

          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="text-white font-semibold text-lg mb-4 bg-blue-500 px-4 py-2 rounded-lg whitespace-nowrap"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              ↑ Click to generate
            </motion.div>
          </motion.div>

          <motion.button
            onClick={onSkip}
            className="absolute bottom-8 right-8 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Complete Tour
          </motion.button>
        </motion.div>
      );
    }

    return null;
  };

  return (
    <AnimatePresence mode="wait">
      {tourStep !== "idle" && tourStep !== "complete" && renderGuideStep()}
    </AnimatePresence>
  );
};

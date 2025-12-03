import { useEffect, useState } from "react";

type TourStep = "idle" | "upload-image" | "enter-prompt" | "submit" | "complete";

export const useIpImagineTour = () => {
  const [tourStep, setTourStep] = useState<TourStep>("idle");
  const [uploadButtonRect, setUploadButtonRect] = useState<DOMRect | null>(
    null
  );
  const [inputRect, setInputRect] = useState<DOMRect | null>(null);
  const [submitButtonRect, setSubmitButtonRect] = useState<DOMRect | null>(
    null
  );

  useEffect(() => {
    if (tourStep === "upload-image") {
      const uploadBtn = document.querySelector("[data-file-input-btn]");
      if (uploadBtn) {
        setUploadButtonRect(uploadBtn.getBoundingClientRect());
        const updateRect = () => {
          const btn = document.querySelector("[data-file-input-btn]");
          if (btn) {
            setUploadButtonRect(btn.getBoundingClientRect());
          }
        };
        window.addEventListener("resize", updateRect);
        return () => window.removeEventListener("resize", updateRect);
      }
    }

    if (tourStep === "enter-prompt") {
      const input = document.querySelector("[data-imagine-input]");
      if (input) {
        setInputRect(input.getBoundingClientRect());
        const updateRect = () => {
          const inp = document.querySelector("[data-imagine-input]");
          if (inp) {
            setInputRect(inp.getBoundingClientRect());
          }
        };
        window.addEventListener("resize", updateRect);
        return () => window.removeEventListener("resize", updateRect);
      }
    }

    if (tourStep === "submit") {
      const submitBtn = document.querySelector("[data-imagine-submit]");
      if (submitBtn) {
        setSubmitButtonRect(submitBtn.getBoundingClientRect());
        const updateRect = () => {
          const btn = document.querySelector("[data-imagine-submit]");
          if (btn) {
            setSubmitButtonRect(btn.getBoundingClientRect());
          }
        };
        window.addEventListener("resize", updateRect);
        return () => window.removeEventListener("resize", updateRect);
      }
    }
  }, [tourStep]);

  const startTour = () => {
    setTourStep("upload-image");
  };

  const nextStep = () => {
    switch (tourStep) {
      case "upload-image":
        setTourStep("enter-prompt");
        break;
      case "enter-prompt":
        setTourStep("submit");
        break;
      case "submit":
        setTourStep("complete");
        break;
      default:
        break;
    }
  };

  const skipTour = () => {
    setTourStep("complete");
  };

  const completeTour = () => {
    setTourStep("idle");
  };

  return {
    tourStep,
    uploadButtonRect,
    inputRect,
    submitButtonRect,
    startTour,
    nextStep,
    skipTour,
    completeTour,
    setTourStep,
  };
};

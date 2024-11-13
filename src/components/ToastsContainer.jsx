import { useState, useEffect } from 'react';

const ToastsContainer = () => {
  const [toasts, setToasts] = useState([]);
  const toastMessages = [
    { id: 1, message: "Welcome to my website!" },
    { id: 2, message: "Feel free to explore!" },
    { id: 3, message: "Happy coding! 🚀" }
  ];

  // Detect screen width to adjust for mobile view
  const isMobileView = window.innerWidth <= 768;

  useEffect(() => {
    let displayIndex = 0;

    const displayToast = () => {
      if (displayIndex < toastMessages.length) {
        const newToast = toastMessages[displayIndex];
        setToasts((prevToasts) => [newToast, ...prevToasts]);
        displayIndex += 1;
        setTimeout(displayToast, 2000);
      }
    };

    const initialTimer = setTimeout(displayToast, 5000);
    return () => clearTimeout(initialTimer);
  }, []);

  const handleCloseToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="fixed bottom-0 right-0 p-4 z-50 flex flex-col gap-2"
    >
      {/* Render only one toast on mobile view, otherwise render all */}
      {toasts
        .slice(0, isMobileView ? 1 : toasts.length)
        .map((toast, index) => (
          <div
            key={toast.id}
            className="bg-tertiary border rounded-lg shadow-lg flex flex-col animate-fadeIn transition-transform duration-300 ease-out"
            style={{
              position: 'relative',
              zIndex: 10 + index,
              transform: `translateX(-${index * 20}px) rotateX(${index * 5}deg)`,
              marginBottom: '-14px',
            }}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            {/* Toast Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-purple-300">
              <strong className="text-white font-semibold text-[13px]">Hey there👋</strong>
              <span className="text-xs text-gray-300 my-2">1 min ago</span>
              <button
                type="button"
                className="text-white hover:text-gray-200"
                onClick={() => handleCloseToast(toast.id)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* Toast Body */}
            <div className="px-4 py-3">
              <p className="text-white">{toast.message}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ToastsContainer;

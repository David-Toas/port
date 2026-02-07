// Prevent MetaMask injection errors
if (typeof window !== 'undefined') {
  // Disable MetaMask auto-detection
  window.ethereum = undefined;
  
  // Create a stub to prevent MetaMask connection attempts
  const createStub = () => ({
    connect: () => Promise.reject(new Error('MetaMask not required for this application')),
    isConnected: () => false,
    request: () => Promise.reject(new Error('MetaMask not required for this application')),
  });
  
  // Override potential MetaMask globals
  if (typeof window.ethereum === 'undefined') {
    Object.defineProperty(window, 'ethereum', {
      value: createStub(),
      writable: false,
      configurable: false
    });
  }
}
import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the app element for accessibility

interface PasswordModalProps {
  setPasswordCorrect: (isCheck: boolean) => void;
}

const PasswordModal: React.FC<PasswordModalProps> = ({
  setPasswordCorrect,
}) => {
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const decodeFromBase64 = (encoded: string): string => {
    return decodeURIComponent(escape(atob(encoded)));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const checkPassword = () => {
    const encodedPassword = process.env.NEXT_PUBLIC_PASSWORD;
    try {
      if (encodedPassword === undefined) {
        throw Error;
      }
      const decodedPassword = decodeFromBase64(encodedPassword);
      if (decodedPassword === password) {
        setPasswordCorrect(true);
        setError(false);
      } else {
        setPasswordCorrect(false);
        setError(true);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      checkPassword();
    }
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={() => {}}
      className="max-w-md mt-[35vh] mx-auto p-6 bg-white rounded-micro shadow-md"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50">
      <h2 className="text-xl font-semibold text-[25px] mb-4">
        Enter Your Password
      </h2>
      <div className="mb-3">
        <label
          className="block mb-2 py-1 text-[17px] text-gray-800 font-medium"
          htmlFor="password">
          Password
        </label>
        <div className="relative mb-3">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={handlePasswordChange}
            onKeyDown={handleKeyDown}
            className={`w-full p-3 border ${
              error ? 'border-rose-300' : 'border-gray-300'
            } focus:outline-none focus:border-gray-300 rounded-micro`}
            required
          />

          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 focus:outline-none">
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        {error && <span className="text-rose-500">Password is wrong!</span>}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 text-[20px] rounded-micro hover:bg-blue-600"
        onClick={checkPassword}>
        Confirm
      </button>
    </Modal>
  );
};

export default PasswordModal;

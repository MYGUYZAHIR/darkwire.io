import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UsernameEntry = ({ onSubmit, translations }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const trimmedUsername = username.trim();
    
    if (!trimmedUsername) {
      setError('Please enter a username');
      return;
    }
    
    if (trimmedUsername.length < 2) {
      setError('Username must be at least 2 characters');
      return;
    }
    
    if (trimmedUsername.length > 20) {
      setError('Username must be less than 20 characters');
      return;
    }
    
    if (!/^[a-zA-Z]/.test(trimmedUsername)) {
      setError('Username must start with a letter');
      return;
    }
    
    onSubmit(trimmedUsername);
  };

  return (
    <div>
      <p className="mb-3">Please enter your name to join the chat room:</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError('');
            }}
            autoFocus
            maxLength={20}
          />
          {error && (
            <small className="form-text text-danger">{error}</small>
          )}
        </div>
        <div className="react-modal-footer">
          <button type="submit" className="btn btn-primary btn-lg">
            Join Room
          </button>
        </div>
      </form>
    </div>
  );
};

UsernameEntry.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  translations: PropTypes.object.isRequired,
};

export default UsernameEntry;

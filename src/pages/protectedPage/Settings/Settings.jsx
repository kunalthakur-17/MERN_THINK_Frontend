import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePasswordAction, changePasswordActionReset } from '../../../Redux/Auth/action'

export default function Settings() {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
  
  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false
  })
  
  const dispatch = useDispatch()
  const { loading, data, error } = useSelector(state => state.changePasswordReducer)

  const togglePasswordVisibility = (field) => {
    setShowPassword(prev => ({ ...prev, [field]: !prev[field] }))
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.newPassword !== formData.confirmPassword) {
      alert('New passwords do not match')
      return
    }
    dispatch(changePasswordAction({
      currentPassword: formData.currentPassword,
      newPassword: formData.newPassword
    }))
  }

  const resetForm = () => {
    setFormData({ currentPassword: '', newPassword: '', confirmPassword: '' })
    dispatch(changePasswordActionReset())
  }

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      
      <div className="change-password-section">
        <h2>Change Password</h2>
        
        {data && (
          <div className="success-message">
            Password changed successfully!
            <button onClick={resetForm}>OK</button>
          </div>
        )}
        
        {error && (
          <div className="error-message">
            {error.message || 'Failed to change password'}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Current Password</label>
            <div className="password-input">
              <input
                type={showPassword.currentPassword ? "text" : "password"}
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                required
              />
              <span 
                className="eye-icon" 
                onClick={() => togglePasswordVisibility('currentPassword')}
              >
                {showPassword.currentPassword ? '👁️' : '👁️‍🗨️'}
              </span>
            </div>
          </div>
          
          <div className="form-group">
            <label>New Password</label>
            <div className="password-input">
              <input
                type={showPassword.newPassword ? "text" : "password"}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                minLength="6"
                required
              />
              <span 
                className="eye-icon" 
                onClick={() => togglePasswordVisibility('newPassword')}
              >
                {showPassword.newPassword ? '👁️' : '👁️‍🗨️'}
              </span>
            </div>
          </div>
          
          <div className="form-group">
            <label>Confirm New Password</label>
            <div className="password-input">
              <input
                type={showPassword.confirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                minLength="6"
                required
              />
              <span 
                className="eye-icon" 
                onClick={() => togglePasswordVisibility('confirmPassword')}
              >
                {showPassword.confirmPassword ? '👁️' : '👁️‍🗨️'}
              </span>
            </div>
          </div>
          
          <button type="submit" disabled={loading}>
            {loading ? 'Changing...' : 'Change Password'}
          </button>
        </form>
      </div>
      
      <style jsx>{`
        .settings-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        
        h1 {
          color: #333;
          margin-bottom: 30px;
        }
        
        .change-password-section {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          border: 1px solid #dee2e6;
        }
        
        h2 {
          color: #495057;
          margin-bottom: 20px;
        }
        
        .form-group {
          margin-bottom: 15px;
        }
        
        label {
          display: block;
          margin-bottom: 5px;
          font-weight: 500;
          color: #495057;
        }
        
        input {
          width: 100%;
          padding: 10px 40px 10px 10px;
          border: 1px solid #ced4da;
          border-radius: 4px;
          font-size: 14px;
        }
        
        .password-input {
          position: relative;
        }
        
        .eye-icon {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          font-size: 16px;
          user-select: none;
        }
        
        input:focus {
          outline: none;
          border-color: #007bff;
          box-shadow: 0 0 0 2px rgba(0,123,255,0.25);
        }
        
        button {
          background: #007bff;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }
        
        button:hover:not(:disabled) {
          background: #0056b3;
        }
        
        button:disabled {
          background: #6c757d;
          cursor: not-allowed;
        }
        
        .success-message {
          background: #d4edda;
          color: #155724;
          padding: 10px;
          border-radius: 4px;
          margin-bottom: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .success-message button {
          background: #28a745;
          padding: 5px 10px;
          font-size: 12px;
        }
        
        .error-message {
          background: #f8d7da;
          color: #721c24;
          padding: 10px;
          border-radius: 4px;
          margin-bottom: 15px;
        }
      `}</style>
    </div>
  )
}

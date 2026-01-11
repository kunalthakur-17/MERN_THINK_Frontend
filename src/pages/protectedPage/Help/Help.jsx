import React from 'react'

export default function Help() {
  return (
    <div className="help-container">
      <h1>Help & Support</h1>
      
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        
        <div className="faq-item">
          <h3>How do I create a new task?</h3>
          <p>Go to "My Tasks" and click the "Add Task" button. Fill in the task details and save.</p>
        </div>
        
        <div className="faq-item">
          <h3>How do I organize tasks by category?</h3>
          <p>Visit "Task Categories" to create custom categories, then assign them when creating tasks.</p>
        </div>
        
        <div className="faq-item">
          <h3>How do I set task priorities?</h3>
          <p>Use "Task Priority" to define priority levels, then assign them to your tasks.</p>
        </div>
        
        <div className="faq-item">
          <h3>How do I track task progress?</h3>
          <p>Update task status using "Task Status" options like To Do, In Progress, or Completed.</p>
        </div>
      </section>
      
      <section className="contact-section">
        <h2>Need More Help?</h2>
        <p>Contact us at: <strong>support@todoapp.com</strong></p>
      </section>
      
      <style jsx>{`
        .help-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        
        h1 {
          color: #333;
          margin-bottom: 30px;
        }
        
        .faq-section {
          margin-bottom: 40px;
        }
        
        .faq-item {
          margin-bottom: 20px;
          padding: 15px;
          border-left: 3px solid #007bff;
          background: #f8f9fa;
        }
        
        .faq-item h3 {
          margin: 0 0 10px 0;
          color: #007bff;
        }
        
        .faq-item p {
          margin: 0;
          color: #666;
        }
        
        .contact-section {
          text-align: center;
          padding: 20px;
          background: #e9ecef;
          border-radius: 5px;
        }
      `}</style>
    </div>
  )
}

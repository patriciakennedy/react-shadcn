-- Create the users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role VARCHAR(50) CHECK (role IN ('candidate', 'recruiter')) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the jobs table
CREATE TABLE jobs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    requirements TEXT NOT NULL,
    location VARCHAR(255) NOT NULL,
    company_id INTEGER NOT NULL,
    recruiter_id INTEGER NOT NULL,
    is_open BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the companies table
CREATE TABLE companies (
    id SERIAL PRIMARY KEY,          
    name VARCHAR(255) NOT NULL,     
    logo_url VARCHAR(255),          
    website VARCHAR(255),           
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

-- Create the applications table

CREATE TABLE applications (
    id SERIAL PRIMARY KEY,           
    job_id INTEGER NOT NULL,         
    candidate_id INTEGER NOT NULL,   
    cover_letter TEXT,               
    status VARCHAR(50) CHECK (status IN ('pending', 'accepted', 'rejected')) DEFAULT 'pending', 
    
    applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Create the saved_jobs table
CREATE TABLE saved_jobs (
    id SERIAL PRIMARY KEY,          
    job_id INTEGER NOT NULL,        
    candidate_id INTEGER NOT NULL,  
    saved_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

-- ---------------------------------------------------------------------------------
--Next Step: Add Foreign Keys

-- Add foreign keys to jobs table
ALTER TABLE jobs
ADD CONSTRAINT fk_jobs_company
FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE;

ALTER TABLE jobs
ADD CONSTRAINT fk_jobs_recruiter
FOREIGN KEY (recruiter_id) REFERENCES users(id) ON DELETE CASCADE;


-- Add foreign keys to applications table
ALTER TABLE applications
ADD CONSTRAINT fk_applications_job
FOREIGN KEY (job_id) REFERENCES jobs(id) ON DELETE CASCADE;

ALTER TABLE applications
ADD CONSTRAINT fk_applications_candidate
FOREIGN KEY (candidate_id) REFERENCES users(id) ON DELETE CASCADE;


-- Add foreign keys to saved_jobs table
ALTER TABLE saved_jobs
ADD CONSTRAINT fk_saved_jobs_job
FOREIGN KEY (job_id) REFERENCES jobs(id) ON DELETE CASCADE;

ALTER TABLE saved_jobs
ADD CONSTRAINT fk_saved_jobs_candidate
FOREIGN KEY (candidate_id) REFERENCES users(id) ON DELETE CASCADE;

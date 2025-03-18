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

-- -----------------------------------------------------------------------------
--Insert Sample Data into tables

INSERT INTO users (first_name, last_name, email, password, role, created_at)
VALUES 
('John', 'Doe', 'john.doe@example.com', 'hashedpassword123', 'candidate', NOW()),
('Jane', 'Smith', 'jane.smith@example.com', 'hashedpassword456', 'recruiter', NOW());


--Insert Sample Data into Companies
INSERT INTO companies (name, logo_url, website, created_at)
VALUES 
('Tech Corp', 'https://example.com/logo1.png', 'https://techcorp.com', NOW()),
('InnovateX', 'https://example.com/logo2.png', 'https://innovatex.com', NOW());




--Insert Sample Data into jobs table
INSERT INTO jobs (title, description, requirements, location, company_id, recruiter_id, is_open, created_at)
VALUES 
('Software Engineer', 'Develop and maintain web applications.', 'Proficient in JavaScript, React, and Node.js.', 'New York, NY', 1, 1, TRUE, NOW()),
('Product Manager', 'Lead the product development team and define strategies.', 'Experience in Agile methodologies and product lifecycle.', 'San Francisco, CA', 2, 1, TRUE, NOW()),
('Data Analyst', 'Analyze data to provide insights for decision-making.', 'Strong skills in SQL, Python, and visualization tools.', 'Austin, TX', 1, 2, FALSE, NOW());


-- Insert sample data into applications table
INSERT INTO applications (job_id, candidate_id, cover_letter, status, applied_at)
VALUES (4, 2, 'I am excited about this Software Engineer role!', 'pending', NOW());


-- Insert sample data into save_jobs
INSERT INTO saved_jobs (job_id, candidate_id, saved_at) 
VALUES 
(4, 1, NOW()), 
(5, 2, NOW()), 
(6, 1, NOW());


---------------------------------------------------------------------------------
-- Create the states table
CREATE TABLE states (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

-- Insert data into the states table
INSERT INTO states (name) VALUES
('Alabama'), ('Alaska'), ('Arizona'), ('Arkansas'), ('California'),
('Colorado'), ('Connecticut'), ('Delaware'), ('Florida'), ('Georgia'),
('Hawaii'), ('Idaho'), ('Illinois'), ('Indiana'), ('Iowa'), ('Kansas'),
('Kentucky'), ('Louisiana'), ('Maine'), ('Maryland'), ('Massachusetts'),
('Michigan'), ('Minnesota'), ('Mississippi'), ('Missouri'), ('Montana'),
('Nebraska'), ('Nevada'), ('New Hampshire'), ('New Jersey'), ('New Mexico'),
('New York'), ('North Carolina'), ('North Dakota'), ('Ohio'), ('Oklahoma'),
('Oregon'), ('Pennsylvania'), ('Rhode Island'), ('South Carolina'),
('South Dakota'), ('Tennessee'), ('Texas'), ('Utah'), ('Vermont'),
('Virginia'), ('Washington'), ('West Virginia'), ('Wisconsin'), ('Wyoming');

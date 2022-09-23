-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 23, 2022 at 07:30 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `infodrive`
--

-- --------------------------------------------------------

--
-- Table structure for table `candidate`
--

CREATE TABLE `candidate` (
  `candidateId` int(11) NOT NULL,
  `OwnerId` int(11) DEFAULT NULL,
  `FirstName` varchar(255) DEFAULT NULL,
  `LastName` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Phone` varchar(255) DEFAULT NULL,
  `City` varchar(255) DEFAULT NULL,
  `Locality` varchar(255) DEFAULT NULL,
  `FullAddress` varchar(255) DEFAULT NULL,
  `WillingToRelocate` enum('0','1') NOT NULL DEFAULT '0',
  `Qualification` varchar(255) DEFAULT NULL,
  `Specialization` varchar(255) DEFAULT NULL,
  `CurrentOrganization` varchar(255) DEFAULT NULL,
  `Title` varchar(255) DEFAULT NULL,
  `TotalExperience` varchar(255) DEFAULT NULL,
  `RelevantExperience` varchar(255) DEFAULT NULL,
  `SalaryType` varchar(255) DEFAULT NULL,
  `CurrencyType` varchar(255) DEFAULT NULL,
  `CurrentSalary` varchar(255) DEFAULT NULL,
  `SalaryExpectation` varchar(255) DEFAULT NULL,
  `CurrentEmploymentStatus` varchar(255) DEFAULT NULL,
  `NoticePeriod` varchar(255) DEFAULT NULL,
  `AvailableFrom` varchar(255) DEFAULT NULL,
  `Resume` varchar(255) DEFAULT NULL,
  `Skills` varchar(255) DEFAULT NULL,
  `LanguageSkills` varchar(255) DEFAULT NULL,
  `ProficiencyLevel` varchar(255) DEFAULT NULL,
  `FacebookURL` varchar(255) DEFAULT NULL,
  `TwitterURL` varchar(255) DEFAULT NULL,
  `LinkedInURL` varchar(255) DEFAULT NULL,
  `GitHubURL` varchar(255) DEFAULT NULL,
  `Source` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `candidate`
--

INSERT INTO `candidate` (`candidateId`, `OwnerId`, `FirstName`, `LastName`, `Email`, `Phone`, `City`, `Locality`, `FullAddress`, `WillingToRelocate`, `Qualification`, `Specialization`, `CurrentOrganization`, `Title`, `TotalExperience`, `RelevantExperience`, `SalaryType`, `CurrencyType`, `CurrentSalary`, `SalaryExpectation`, `CurrentEmploymentStatus`, `NoticePeriod`, `AvailableFrom`, `Resume`, `Skills`, `LanguageSkills`, `ProficiencyLevel`, `FacebookURL`, `TwitterURL`, `LinkedInURL`, `GitHubURL`, `Source`) VALUES
(1, NULL, 'satya', 'singh', 'satya@gmail.com', '123456789', 'mohali', 'sector 78', 'Mohali sector 78 ', '1', 'Bsc It', 'full stack developer', 'web', 'full stack', '3', '3', 'saving', 'INR', '100000', '150000', 'working', '1 month', 'Next month', 'http://localhost:3001/uploads/Candidate/Resume/17-Satendra Singh.pdf', 'React js, Node js', 'Php,node js,react js', '5', 'fb/satya', 'tw/satya', 'link/satya', 'github', 'No'),
(2, NULL, 'Rajneesh', 'kumar', 'rajneesh@gmail.com', '1234567890', 'Mohali', 'Mohali', 'sector 41 CHD', '1', 'BCA', 'Node js', 'DEv Team', 'Backend Developer', '8', '8', 'Saving', 'INR', '60k', '80K', 'Working', '1 month', 'Next month', 'http://localhost:3001/uploads/Candidate/Resume/17-Satendra Singh.pdf', 'node js ,php,javascript', 'node js ,php,javascript', '5', 'fb.com', 'tw.com', 'link.com', 'github', 'ok'),
(3, NULL, NULL, 'singh', 'mans@gmail.com', '1234567890', 'mohali', 'mohali', 'sector 78 mohali ', '1', 'BBA', 'nodejs', 'Dev team', 'backend dev', '7', '7', 'Saving', 'INR', '60k', '80k', 'working', '2 month', 'Next month', 'http://localhost:3001/uploads/Candidate/Resume/17-Satendra Singh.pdf', 'Php, nodejs,reactjs,javascript', 'Php, nodejs,reactjs,javascript All Jobs List All Jobs List All Jobs List', '5', 'fb.com', 'twitter.com', 'linkedinurl.com', 'git', 'ok12'),
(4, NULL, 'manjeet', 'singh', 'manjeet@gmail.com', '1234567890', 'mohali', 'Local', 'rishieksh', '1', 'BBA', 'Php', 'Php', 'Php Developer', '2', '3', 'saving', 'USD', '$200', '$600', 'Working', '1 Month', 'Next Month', 'http://localhost:3001/uploads/Candidate/Resume/11-bhoomi updated-converted (1).pdf', 'Php', 'Php', '5', 'fb.com', 'tw.com', 'linkedinurl.com', 'ftg', 'ok'),
(6, 12, 'mandeep', 'singh', 'mand@gmail.com', '767846539645634', 'mohali', 'local', 'sector 67 mohali', '1', 'BBA', 'sjas', 'BAA', 'full', '3', '4', 'montly', 'INR', '30K', '70K', 'ok', 'next', 'next', 'http://localhost:3001/uploads/Candidate/Resume/13-Durgesh Raju- UX-UI, Front End Developer- 7+ Years.doc', 'node js', 'node js', 'ok ', 'fb.com', 'fb.om', 'jdks', 'ok', 'ok'),
(7, 11, 'san', 'hghf', 'hari12@gmail.com', '1234567890', 'mohali', 'local', 'sdsad', '1', 'BBA', 'asdas', 'sadas', 'asdas', 'asas', 'asdasd', 'asd', 'asd', 'asdas', 'asdd', 'asd', 'asdas', 'asd', 'http://localhost:3001/uploads/Candidate/Resume/16-13-Durgesh Raju- UX-UI, Front End Developer- 7+ Years.doc', 'sd', 'as', 'asd', 'as', 'asas', 'asd', 'asd', 'as'),
(8, 11, 'manjeet', 'singh', 'jeet@gmail.com', '1234567890', 'mohali', 'local', 'sector 78', '1', 'BCA', 'node js', 'full stack', 'full stack', '3', '3', 'montly', 'INR', '50K', '60K', 'working', '1month', 'next month', '', 'node js, reactjs', 'nodeJs, reactJs', 'High', 'fb.com', 'fb.om', 'jdks', 'ok', 'ok');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `CompanyId` int(11) NOT NULL,
  `OwnerId` int(11) DEFAULT NULL,
  `CompanyName` varchar(255) DEFAULT NULL,
  `Industry` varchar(255) DEFAULT NULL,
  `Website` varchar(255) DEFAULT NULL,
  `City` varchar(255) DEFAULT NULL,
  `About` text DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `FacebookURL` varchar(255) DEFAULT NULL,
  `TwitterURL` varchar(255) DEFAULT NULL,
  `LinkedInURL` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`CompanyId`, `OwnerId`, `CompanyName`, `Industry`, `Website`, `City`, `About`, `Address`, `FacebookURL`, `TwitterURL`, `LinkedInURL`) VALUES
(4, NULL, 'BMW122', 'Automation', 'ab.com', 'NEW York', 'This is it based company and ', 'This is it based company and  mohali ', 'fb.com/bmw', 'tew/.com/bmw', 'linkdein.com/bmw'),
(7, NULL, 'mandeep', 'auto', 'dbdb.com', 'nsnsn', 'sbdfjkd ddkjfbbskdf sdfksd sdff ksd ff sdkfskd skdfsd', 'jfwbef wef kw e efw efw efwwffkw weffqwwefjwke', 'gb.com', 'ter.com', 'fwe'),
(13, 11, 'NEWAUTO', 'auto', 'NEWAUTo.com', 'Yoast', 'This is yoast base company', 'Sector 78 mohali', 'fb.com', 'twr.com', 'link.com'),
(14, 12, 'mk', 'uhg', 'mh.com', 'jkll', 'b g gffgfgfgh ffhgffghfyf fghf fy f', 'hggjhh jhg jj jghg', 'gh.com', 'tre2.com', 'linkdin.com'),
(15, 12, 'mani', 'Auto', 'auto.com', 'Auto', 'This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team This is our new dev team', 'Tgis cc ghhfghv c hchch ffygf Tgis cc ghhfghv c hchch ffygf Tgis cc ghhfghv c hchch ffygf Tgis cc ghhfghv c hchch ffygf Tgis cc ghhfghv c hchch ffygfTgis cc ghhfghv c hchch ffygfTgis cc ghhfghv c hchch ffygfTgis cc ghhfghv c hchch ffygfTgis cc ghhfghv c h', 'fb.com', 'trewe.com', 'fddfdd.com'),
(16, 11, 'ToXSL Technologies', 'IT', 'ToXSLTechnologies.com', 'Mohali', 'ToXSL - Mobile App Development And Web Development Company', 'C-127 2nd Floor, Phase-8, Industrial Area, Sahibzada Ajit Singh Nagar, Punjab 160071', 'ToXSL.com', 'twitter/ToXSL', 'linkdin/ToXSL');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `ContactId` int(11) NOT NULL,
  `OwnerId` int(11) DEFAULT NULL,
  `CompanyId` int(11) DEFAULT NULL,
  `FirstName` varchar(255) DEFAULT NULL,
  `LastName` varchar(255) DEFAULT NULL,
  `Title` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Phone` varchar(255) DEFAULT NULL,
  `City` varchar(255) DEFAULT NULL,
  `FacebookURL` varchar(255) DEFAULT NULL,
  `TwitterURL` varchar(255) DEFAULT NULL,
  `LinkedInURL` varchar(255) DEFAULT NULL,
  `Stage` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`ContactId`, `OwnerId`, `CompanyId`, `FirstName`, `LastName`, `Title`, `Email`, `Phone`, `City`, `FacebookURL`, `TwitterURL`, `LinkedInURL`, `Stage`) VALUES
(5, 11, 7, 'raj', 'k', 'SF', 'raj@gmail.com', '898989898989', 'CHD', 'Ch.com', 'twr.com', 'like.com', 'Lead'),
(6, 11, 11, 'mandeep', 'singh', 'webDev', 'mandeep@gmailk.com', '1234567890', 'Mohali', 'fb.com', 'twr.com', 'liwnk.com', 'Lead'),
(7, 12, 15, 'Hari', 'Chopra', 'Surhiti', 'suriti@gmail.com', '8954174002', 'New Year', 'suriti.com', 'twr.com', 'linkdin.com', 'Accounts'),
(8, 12, 14, 'sonu', 'singh', 'HR Title', 'title@gmail.com', '8687685445', 'New Mohali', 'mohali.com', 'twrmohali.com', 'sbdhh.com', 'Accounts'),
(9, 11, 13, 'Man', 'Jeet', 'New Car By', 'jeet@gmail.com', '1234567890', 'New York', 'fb.com', 'twr.com', 'link.com', 'Accounts'),
(10, 11, 16, 'Satendra', 'singh', 'Full Stack Developer', 'satendra@gmail.com', '1234567890', 'Mohali', 'fb/satendra', 'twitter/satendra', 'linkdin/satendra', 'Accounts'),
(11, 11, 14, 'san', 'kapur', 'HR', 'hrsan@gmail.com', '1234567890', 'York', '', '', 'sads', 'Followup');

-- --------------------------------------------------------

--
-- Table structure for table `invitation`
--

CREATE TABLE `invitation` (
  `InvitationId` int(11) NOT NULL,
  `EmailId` varchar(255) DEFAULT NULL,
  `Role` int(11) DEFAULT NULL,
  `Status` enum('ES','TR','RS') DEFAULT NULL COMMENT 'ES - email sent, TR - team mate joined, RS - resend Email',
  `CreatedBy` int(11) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT NULL,
  `ModifiedBy` int(11) DEFAULT NULL,
  `ModifiedDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `invitation`
--

INSERT INTO `invitation` (`InvitationId`, `EmailId`, `Role`, `Status`, `CreatedBy`, `CreatedDate`, `ModifiedBy`, `ModifiedDate`) VALUES
(10, 'Rajneesh@infodrive-solutions.com', 1, 'TR', 9, NULL, NULL, NULL),
(11, 'san@gmail.com', 2, 'ES', 11, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `Id` int(11) NOT NULL,
  `OwnerId` int(11) DEFAULT NULL,
  `CompanyId` int(11) DEFAULT NULL,
  `JobTitle` varchar(255) DEFAULT NULL,
  `NoOfOpenings` int(11) DEFAULT NULL,
  `MinExp` int(11) DEFAULT NULL,
  `MaxExp` int(11) DEFAULT NULL,
  `SalaryType` varchar(255) DEFAULT NULL,
  `Currency` varchar(255) DEFAULT NULL,
  `Jobdescription` text DEFAULT NULL,
  `MinSalary` int(11) DEFAULT NULL,
  `MaxSalary` int(11) DEFAULT NULL,
  `Qualification` varchar(255) DEFAULT NULL,
  `Specialization` varchar(255) DEFAULT NULL,
  `City` varchar(255) DEFAULT NULL,
  `Locality` varchar(255) DEFAULT NULL,
  `State` varchar(255) DEFAULT NULL,
  `Country` varchar(255) DEFAULT NULL,
  `Address` text DEFAULT NULL,
  `JobStatus` enum('Open','On Hold','Canceled','Closed') NOT NULL DEFAULT 'Open'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`Id`, `OwnerId`, `CompanyId`, `JobTitle`, `NoOfOpenings`, `MinExp`, `MaxExp`, `SalaryType`, `Currency`, `Jobdescription`, `MinSalary`, `MaxSalary`, `Qualification`, `Specialization`, `City`, `Locality`, `State`, `Country`, `Address`, `JobStatus`) VALUES
(1, NULL, 2, 'job1', 2, 2, 2, 'asaSAs', 'aSAs', 'sfsdfsdfdsfsd  dfgfdgfdgf', 450000, 6000000, 'wqewqe', 'qwewqewqewqewqewe', 'wqewqewqe', 'qwewqewq', 'qwewqewq', 'qwewqewq', 'sector56', 'Canceled'),
(2, NULL, 2, 'Backend dev', 2, 3, 4, 'Monthy', 'INR', 'We are looking for node js developer.', 20, 25, 'BCA', 'Compert and Node js', 'Mohali', 'local', 'Panjab', 'India', 'Sector 78 mohali ', 'Open'),
(3, NULL, 7, 'Backend Developer', 3, 2, 3, 'Saving', 'INR', 'We are looking for backend developer for minimum exp 4 year', 20, 30, 'BCA', 'Create Api Using node js', 'mohali', 'Indian', 'Panjab', 'India', 'Sector 78 mohali', 'On Hold'),
(4, 12, 7, 'Full Stack Developer', 4, 2, 3, 'Monthly', 'INR', 'We are looking for fullstack developer', 30, 40, 'BSC', 'Node js ,recat js', 'mohali', 'IN', 'punjab', 'Indian', 'Sector 78 mohlai Homeland', 'On Hold'),
(5, 12, 4, 'New Post', 2, 2, 3, 'Montly', 'INR', 'We are looking for node js developer full time', 20, 25, 'BCA', 'Creating Web app', 'Rishikesh', 'IN', 'Uttrakhand', 'INDIA', 'Ganganagr ', 'Closed'),
(9, 11, 7, 'Blockchain Developer', 2, 2, 3, 'montly', 'INR', '<h3>Blockchain Developer</h3><p>We are looking for a blockchain developer&nbsp;<br><br><strong>Responbility:</strong></p><ol><li>Basic knology of blockchain</li></ol><p><br></p><p><br>&nbsp;</p>', 20, 50, 'BBA', 'Node js', 'mohali', 'local', 'Uttrakhand', 'India', 'Sector 3 near DSB school', 'Open'),
(10, 11, 15, 'back', 2, 2, 3, 'monthly', 'INR', '<p>This is web dev team</p>', 30, 40, 'BCA', 'dsfsf', 'mohali', 'local', 'Uttrakhand', 'India', 'dsfs', 'Open'),
(11, 11, 16, 'Node JS Developer', 2, 1, 5, 'monthly', 'INR', '<h2 id=\"jobDescriptionTitle\" class=\"jobsearch-JobDescriptionSection-jobDescriptionTitle icl-u-xs-my--md\" style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; letter-spacing: -0.06px; font-size: 1.125rem; font-weight: 700; line-height: 1.34; box-sizing: border-box; margin-top: 1rem !important; margin-bottom: 1rem !important; color: rgb(45, 45, 45); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Full Job Description</h2><div id=\"jobDescriptionText\" class=\"jobsearch-jobDescriptionText\" style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; color: rgb(45, 45, 45); font-size: 13.3333px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><p style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important; font-size: inherit; letter-spacing: 0px; font-weight: 400; line-height: 1.43;\">Experience: 2 - 5 Years</p><p style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important; font-size: inherit; letter-spacing: 0px; font-weight: 400; line-height: 1.43;\">Location:<span>&nbsp;</span><strong style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important;\">Mohali</strong><span>&nbsp;</span>(work from office)</p><p style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important; font-size: inherit; letter-spacing: 0px; font-weight: 400; line-height: 1.43;\"><strong style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important;\">You can directly walk in for Interview</strong></p><p style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important; font-size: inherit; letter-spacing: 0px; font-weight: 400; line-height: 1.43;\">Requirements :</p><ul style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important; font-size: inherit; letter-spacing: 0px; font-weight: 400; line-height: 1.43;\"><li style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important;\">Experience with Node.js Framework, JavaScript tools.</li><li style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important;\">Proficiency in RESTful APIs and API Communications.</li><li style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important;\">Experience with ExpressJs, ReactJS, AngularJS and Redux.</li><li style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important;\">Experience with MySQL and MongoDB.</li><li style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important;\">Good knowledge of OOPS concept.</li></ul><p style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important; font-size: inherit; letter-spacing: 0px; font-weight: 400; line-height: 1.43;\">Skills:<span>&nbsp;</span><strong style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important;\">NodeJS, API\'s</strong>,<span>&nbsp;</span><strong style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important;\">MERN Stack</strong></p><p style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important; font-size: inherit; letter-spacing: 0px; font-weight: 400; line-height: 1.43;\">Job Type: Full-time</p><p style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important; font-size: inherit; letter-spacing: 0px; font-weight: 400; line-height: 1.43;\">Salary: ₹500,000.00 - ₹1,000,000.00 per year</p><p style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important; font-size: inherit; letter-spacing: 0px; font-weight: 400; line-height: 1.43;\">Benefits:</p><ul style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important; font-size: inherit; letter-spacing: 0px; font-weight: 400; line-height: 1.43;\"><li style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important;\">Food provided</li><li style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important;\">Health insurance</li></ul><p style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important; font-size: inherit; letter-spacing: 0px; font-weight: 400; line-height: 1.43;\">Schedule:</p><ul style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important; font-size: inherit; letter-spacing: 0px; font-weight: 400; line-height: 1.43;\"><li style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important;\">Day shift</li></ul><p style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important; font-size: inherit; letter-spacing: 0px; font-weight: 400; line-height: 1.43;\">Supplemental pay types:</p><ul style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important; font-size: inherit; letter-spacing: 0px; font-weight: 400; line-height: 1.43;\"><li style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important;\">Shift allowance</li></ul><p style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important; font-size: inherit; letter-spacing: 0px; font-weight: 400; line-height: 1.43;\">Ability to commute/relocate:</p><ul style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important; font-size: inherit; letter-spacing: 0px; font-weight: 400; line-height: 1.43;\"><li style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important;\">Industrial Area Phase 8 Mohali , Mohali - 160071, Punjab: Reliably commute or planning to relocate before starting work (Required)</li></ul><p style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important; font-size: inherit; letter-spacing: 0px; font-weight: 400; line-height: 1.43;\">Education:</p><ul style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important; font-size: inherit; letter-spacing: 0px; font-weight: 400; line-height: 1.43;\"><li style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important;\">Bachelor\'s (Preferred)</li></ul><p style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important; font-size: inherit; letter-spacing: 0px; font-weight: 400; line-height: 1.43;\">Experience:</p><ul style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important; font-size: inherit; letter-spacing: 0px; font-weight: 400; line-height: 1.43;\"><li style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important;\">total work: 1 year (Preferred)</li><li style=\"font-family: &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif !important;\">Node.js: 1 year (Preferred)</li></ul></div>', 5, 10, 'BCA', 'Experience with Node.js Framework, JavaScript tools.\nProficiency in RESTful APIs and API Communications.\nExperience with ExpressJs, ReactJS, AngularJS and Redux.\nExperience with MySQL and MongoDB.\nGood knowledge of OOPS concept.', 'mohali', 'local', 'Panjab', 'India', 'Phase-8, Industrial Area, Sahibzada Ajit Singh Nagar', 'Open');

-- --------------------------------------------------------

--
-- Table structure for table `passwordhistory`
--

CREATE TABLE `passwordhistory` (
  `Id` int(11) NOT NULL,
  `UserEmailId` varchar(255) DEFAULT NULL,
  `Password1` varchar(255) DEFAULT NULL,
  `Password2` varchar(255) DEFAULT NULL,
  `Password3` varchar(255) DEFAULT NULL,
  `Password4` varchar(255) DEFAULT NULL,
  `Password5` varchar(255) DEFAULT NULL,
  `Password6` varchar(255) DEFAULT NULL,
  `LastPassword` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `passwordhistory`
--

INSERT INTO `passwordhistory` (`Id`, `UserEmailId`, `Password1`, `Password2`, `Password3`, `Password4`, `Password5`, `Password6`, `LastPassword`) VALUES
(6, 'kumar.rajneesh86@gmail.com', '$2b$10$6vyVaMsRLeLF90LQsbUog.vEamarMqzuXke5BW2Ehb/LNB3Uzu1m2', '$2b$10$6lJKeCS1hgFF2AN8.HrcCOerJtXwBvCxINnerLqUVfDU1xgXjq74O', '$2b$10$1QhX5g8Sx6S9LUKnuEiCiOyShx9zRS2wlYNd6FJxDhFw8CkyCydWm', '', '', '', 3),
(7, 'Rajneesh@infodrive-solutions.com', '$2b$10$FWdzhJEUAw7ChJLMwy0O1ub0QWR4zXIiHdEPa.0XdInbklEPjmRbm', NULL, NULL, NULL, NULL, NULL, 1),
(8, 'spprtmandeep@gmail.com', '$2b$10$SRlYiiyanhfUMCQ8clogx./plBhTPiCYqdyD8ByPM6Lt2S4hx9NTK', '$2b$10$Mm2T6aBOlgk2.HSDFw7oL.wI.0eyHJVAGhVFOe0Jpn9VUQ0pq9RnW', '$2b$10$6J1nFAlLFKnqGVHk3i..7.dRYM8aE3HJDi2xnt7cI9efYE3ucpRL2', '', '', '', 3),
(9, 'satendra@gmail.com', '$2b$10$wbHFYQuwycE4MyWOhFN3mOo5Fm/SnEzr0Fn1q6YiGC1rZtRjxVKSi', NULL, NULL, NULL, NULL, NULL, 1),
(10, 'kamjeet@gmail.com', '$2b$10$PSsxhAGuutDuVlsy1eX5Fu7dw3BzeEW0vw7hJE1eJvzsVtVWvYLvO', NULL, NULL, NULL, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `RoleId` int(11) NOT NULL,
  `RoleName` varchar(255) DEFAULT NULL COMMENT '0= admin, 1= Sales, 2 = recruiter'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`RoleId`, `RoleName`) VALUES
(0, 'Admin'),
(1, 'Sales'),
(2, 'Recruiter');

-- --------------------------------------------------------

--
-- Table structure for table `submittedjobapplication`
--

CREATE TABLE `submittedjobapplication` (
  `Id` int(11) NOT NULL,
  `JobId` int(11) DEFAULT NULL,
  `CandidateId` int(11) DEFAULT NULL,
  `FirstName` varchar(255) DEFAULT NULL,
  `LastName` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Phone` varchar(255) DEFAULT NULL,
  `City` varchar(255) DEFAULT NULL,
  `Resume` varchar(255) DEFAULT NULL,
  `JobApplicationType` enum('Assigned','Applied') DEFAULT NULL,
  `CandidateStatusByJob` enum('Assigned','Shortlisted','Interview Scheduled','Interview Not Attended','Interview Rescheduled','Rejected','On Hold','Selected','Offered','Did Not Join','Placed') DEFAULT NULL,
  `CreatedDate` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `submittedjobapplication`
--

INSERT INTO `submittedjobapplication` (`Id`, `JobId`, `CandidateId`, `FirstName`, `LastName`, `Email`, `Phone`, `City`, `Resume`, `JobApplicationType`, `CandidateStatusByJob`, `CreatedDate`) VALUES
(1, 1, 1, 'mandeep', 'singh', 'satya@gmail.com', '123456789', 'mohali', 'http://localhost:3001/uploads/Resume/18-Satendra Singh.pdf', 'Applied', 'Interview Rescheduled', '2022-06-01 10:10:42'),
(2, 2, 1, 'mandeep', 'singh', 'satya@gmail.com', '123456789', 'mohali', 'http://localhost:3001/uploads/Resume/10-Satendra Singh.pdf', 'Applied', 'Rejected', '2022-06-01 10:11:13'),
(3, 5, 1, 'satya', 'singh', 'satya@gmail.com', '123456', 'Rishikesh', 'http://localhost:3001/uploads/Resume/14-Satendra Singh.pdf', 'Applied', 'Rejected', '2022-06-01 10:21:06'),
(4, 2, 2, 'rajneesh', 'singh', 'rajneesh@gmail.com', '123456789', 'chd', 'http://localhost:3001/uploads/Resume/12-Satendra Singh.pdf', 'Applied', NULL, '2022-06-01 10:21:42'),
(5, 5, 1, NULL, NULL, NULL, NULL, NULL, NULL, 'Assigned', 'Rejected', '2022-06-01 10:23:22'),
(6, 1, 2, NULL, NULL, NULL, NULL, NULL, NULL, 'Assigned', 'Assigned', '2022-06-01 10:25:43'),
(7, 2, 2, NULL, NULL, NULL, NULL, NULL, NULL, 'Assigned', 'Assigned', '2022-06-01 10:25:43'),
(8, 2, 4, NULL, NULL, NULL, NULL, NULL, NULL, 'Assigned', 'Assigned', '2022-06-01 10:30:52'),
(9, 5, 4, NULL, NULL, NULL, NULL, NULL, NULL, 'Assigned', 'Assigned', '2022-06-01 10:30:52'),
(10, 2, 4, NULL, NULL, NULL, NULL, NULL, NULL, 'Assigned', 'Assigned', '2022-06-01 10:30:54'),
(11, 5, 4, NULL, NULL, NULL, NULL, NULL, NULL, 'Assigned', 'Assigned', '2022-06-01 10:30:54'),
(12, 2, 4, NULL, NULL, NULL, NULL, NULL, NULL, 'Assigned', 'Assigned', '2022-06-01 10:32:14'),
(13, 8, 1, NULL, NULL, NULL, NULL, NULL, NULL, 'Assigned', 'Assigned', '2022-07-27 12:52:52');

-- --------------------------------------------------------

--
-- Table structure for table `userinfo`
--

CREATE TABLE `userinfo` (
  `UserId` int(11) NOT NULL,
  `FirstName` varchar(250) DEFAULT NULL,
  `ApplicationLanguage` varchar(250) DEFAULT NULL,
  `EmailId` varchar(200) DEFAULT NULL,
  `UserRoleId` int(11) DEFAULT NULL,
  `Password` varchar(200) DEFAULT NULL,
  `RegStatus` enum('N','TR','P') DEFAULT NULL COMMENT '(N - new client) , (TR - team mate joined based on the link\r\n      sent to him), (P - pending client to join the team).',
  `Status` enum('A','D','TI') DEFAULT NULL COMMENT '(A - Active, D- soft deletion, TI- Temporarirly inactivated)',
  `CreatedBy` int(11) DEFAULT NULL,
  `CreationDate` timestamp NULL DEFAULT NULL,
  `ModifiedBy` int(11) DEFAULT NULL,
  `ModifiedDate` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userinfo`
--

INSERT INTO `userinfo` (`UserId`, `FirstName`, `ApplicationLanguage`, `EmailId`, `UserRoleId`, `Password`, `RegStatus`, `Status`, `CreatedBy`, `CreationDate`, `ModifiedBy`, `ModifiedDate`) VALUES
(11, 'Satya12', 'Russian', 'spprtmandeep@gmail.com', 0, '$2b$10$6J1nFAlLFKnqGVHk3i..7.dRYM8aE3HJDi2xnt7cI9efYE3ucpRL2', 'N', NULL, NULL, '2022-04-12 07:31:04', NULL, NULL),
(13, 'Rajneesh', 'Russian', 'kumar.rajneesh86@gmail.com', 0, '$2b$10$9UtYogvU9EUdOr8m3m0yeOcm2OoHk0e/GUMzJtuyUx0cVq4eqJAH.', 'N', NULL, NULL, '2022-07-15 14:17:53', NULL, NULL),
(20, 'Pardeep', 'Russian', 'pradeep@infodrive-solutions.com', 0, '$2b$10$MLyOckrFR0dnpYikjZ/vd.Kj9fSSU/GabRhGVO0uPZCihvZEPMjIu', 'N', NULL, NULL, '2022-08-02 12:51:51', NULL, NULL),
(21, 'Kapil', 'Russian', 'kapil@infodrive-solutions.com', 0, '$2b$10$AefCv8cS7ammDGYx6xzlI.HJlkG1NI/euRmFZ1uyEYxky4ZaNpFnC', 'N', NULL, NULL, '2022-08-02 12:52:56', NULL, NULL),
(22, 'Bkumar', 'Russian', 'bkumar@infodrive-solutions.com', 0, '$2b$10$JflcJv.KNlbbdhNMNa52T.Q68j4UlwS/aYRuo2VS13DM6zje.rxya', 'N', NULL, NULL, '2022-08-03 03:54:54', NULL, NULL),
(23, 'sudhir', 'Russian', 'sudhir@infodrive-solutions.com', 0, '$2b$10$zZxl2zVoOlvh1Jpr5bxczemtk5bXtBgK7KhyDeYTv/3jLsPFcKTcu', 'N', NULL, NULL, '2022-08-18 12:38:35', NULL, NULL),
(24, 'Bikram', 'Russian', 'bikram@infodrive-solutions.com', 0, '$2b$10$Qjd9yJX8xEeCwdssGRAdE.8JTBVfa774KOeV9.QqsGIpoSdRGHn5u', 'N', NULL, NULL, '2022-08-18 12:39:15', NULL, NULL),
(25, 'Divya', 'Russian', 'divya@infodrive-solutions.com', 2, '$2b$10$H3QPYMu0BL8CbNsn/Q3.j.ELqBs10E3SEdil2efq/atCGFPfjKcMG', 'N', NULL, NULL, '2022-08-18 12:39:56', NULL, NULL),
(26, 'Shilpa', 'Russian', 'shilpa@infodrive-solutions.com', 2, '$2b$10$LIt0k.B2kIMASaVW84lc6uTXO7oQRoR5aw5ohhwK0K/azZXOFRDrC', 'N', NULL, NULL, '2022-08-18 12:40:29', NULL, NULL),
(27, 'saipradha', 'Russian', 'saipradha@infodrive-solutions.com', 2, '$2b$10$XSI3vfRrzmDU9.UY8a7VKeck9hT0GToAO9oXIRdMayEa35HWJqmi.', 'N', NULL, NULL, '2022-08-18 12:41:01', NULL, NULL),
(28, 'aparna', 'Russian', 'aparna@infodrive-solutions.com', 2, '$2b$10$yj4Vbqu7bYuhg9DBXwMGwOCTWtZIO1L0rpFDu4wNrvxTg2wbGUlAG', 'N', NULL, NULL, '2022-08-18 12:41:30', NULL, NULL),
(29, 'fazlina', 'Russian', 'fazlina@infodrive-solutions.com', 2, '$2b$10$rkFyYwvIXqHeNYkS9s95eePXmsxyZ54bnniLVPxByyiBhf4.Fz5me', 'N', NULL, NULL, '2022-08-18 12:42:01', NULL, NULL),
(30, 'shashank', 'Russian', 'shashank@infodrive-solutions.com', 1, '$2b$10$JEd5mHJgd19y2cBBlfb3yOvql9t8wwxrnMOzBkpNVfQR8Pe52/AJS', 'N', NULL, NULL, '2022-08-18 12:42:31', NULL, NULL),
(31, 'Kyna', 'Russian', 'Kyna@infodrive-solutions.com', 1, '$2b$10$qk4m7zz.64T/ysiUA81wF.QUwBQ459Y/KwvQ0JSsuZk00NB57/emi', 'N', NULL, NULL, '2022-08-18 12:42:58', NULL, NULL),
(32, 'Taek', 'Russian', 'taek@infodrive-solutions.com', 1, '$2b$10$8t2qY6zoLqN5zZd0QY1.A.yCcvf/WMmwOgZGz9k2RgAbYTInycw3y', 'N', NULL, NULL, '2022-08-18 12:43:21', NULL, NULL),
(33, 'kamjeet', 'Russian', 'kamjeet@gmail.com', 1, '$2b$10$PSsxhAGuutDuVlsy1eX5Fu7dw3BzeEW0vw7hJE1eJvzsVtVWvYLvO', 'N', NULL, NULL, '2022-09-22 10:27:54', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `candidate`
--
ALTER TABLE `candidate`
  ADD PRIMARY KEY (`candidateId`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`CompanyId`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`ContactId`);

--
-- Indexes for table `invitation`
--
ALTER TABLE `invitation`
  ADD PRIMARY KEY (`InvitationId`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `passwordhistory`
--
ALTER TABLE `passwordhistory`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`RoleId`);

--
-- Indexes for table `submittedjobapplication`
--
ALTER TABLE `submittedjobapplication`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `userinfo`
--
ALTER TABLE `userinfo`
  ADD PRIMARY KEY (`UserId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `candidate`
--
ALTER TABLE `candidate`
  MODIFY `candidateId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `CompanyId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `ContactId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `invitation`
--
ALTER TABLE `invitation`
  MODIFY `InvitationId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `passwordhistory`
--
ALTER TABLE `passwordhistory`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `submittedjobapplication`
--
ALTER TABLE `submittedjobapplication`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `userinfo`
--
ALTER TABLE `userinfo`
  MODIFY `UserId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

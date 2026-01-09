import React, { useState } from 'react';
import '../styles/Skills.css';

// Import skill icons (44 total)

// Import skill icons from skills folder
import windows11Icon from '../assets/skills/Windows 11.png';
import ubuntuIcon from '../assets/skills/Ubuntu.png';
import fedoraIcon from '../assets/skills/Fedora.png';
import linuxIcon from '../assets/skills/Linux.png';
import bashIcon from '../assets/skills/Bash.png';
import powershellIcon from '../assets/skills/Powershell.png';
import embeddedCIcon from '../assets/skills/Embedded C.png';
import pythonIcon from '../assets/skills/Python.png';
import vscodeIcon from '../assets/skills/Visual Studio Code (VS Code).png';
import githubIcon from '../assets/skills/GitHub.png';
import postmanIcon from '../assets/skills/Postman.png';
import dbeaverIcon from '../assets/skills/DBeaver.png';
import arduinoIcon from '../assets/skills/Arduino.png';
import raspberrypiIcon from '../assets/skills/Raspberry Pi.png';
import iotIcon from '../assets/skills/iot.png';
import noderedIcon from '../assets/skills/nodered.png';
import mqttIcon from '../assets/skills/mqtt.svg';
import emqxIcon from '../assets/skills/emqx.jpg';
import modbusIcon from '../assets/skills/modbus.png';
import opcuaIcon from '../assets/skills/opcua.png';
import grafanaIcon from '../assets/skills/Grafana.png';
import ignitionIcon from '../assets/skills/ignition.png';

import tiaportalIcon from '../assets/skills/TIA-Portal.jpg';
import codesysIcon from '../assets/skills/Codesys_Logo.png';
import postgresIcon from '../assets/skills/postgres.png';
import timescaledbIcon from '../assets/skills/timescaledb.png';
import influxdbIcon from '../assets/skills/InfluxDB.png';
import mysqlIcon from '../assets/skills/mysql.png';
import mongodbIcon from '../assets/skills/MongoDB.png';

import nodejsIcon from '../assets/skills/Nodejs.png';
import npmIcon from '../assets/skills/NPM.png';
import flaskIcon from '../assets/skills/Flask.png';
import reactIcon from '../assets/skills/React.png';
import opencvIcon from '../assets/skills/OpenCV.png';
import tensorflowIcon from '../assets/skills/TensorFlow.png';
import pytorchIcon from '../assets/skills/PyTorch.png';
import huggingfaceIcon from '../assets/skills/huggingface.png';
import ollamaIcon from '../assets/skills/ollama.png';
import dockerIcon from '../assets/skills/Docker.png';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const skillsData = [
    // Operating Systems
    { name: 'Windows 11', icon: windows11Icon, level: 'Proficient', category: 'Operating Systems' },
    { name: 'Ubuntu', icon: ubuntuIcon, level: 'Proficient', category: 'Operating Systems' },
    { name: 'Fedora', icon: fedoraIcon, level: 'Proficient', category: 'Operating Systems' },
    { name: 'Linux', icon: linuxIcon, level: 'Proficient', category: 'Operating Systems' },

    // Programming & Scripting
    { name: 'Bash', icon: bashIcon, level: 'Proficient', category: 'Programming & Scripting' },
    { name: 'PowerShell', icon: powershellIcon, level: 'Proficient', category: 'Programming & Scripting' },
    { name: 'Embedded C', icon: embeddedCIcon, level: 'Intermediate', category: 'Programming & Scripting' },
    { name: 'Python', icon: pythonIcon, level: 'Proficient', category: 'Programming & Scripting' },

    // Development Tools / IDEs
    { name: 'VS Code', icon: vscodeIcon, level: 'Proficient', category: 'Development Tools / IDEs' },
    { name: 'GitHub', icon: githubIcon, level: 'Proficient', category: 'Development Tools / IDEs' },
    { name: 'Postman', icon: postmanIcon, level: 'Proficient', category: 'Development Tools / IDEs' },
    { name: 'DBeaver', icon: dbeaverIcon, level: 'Proficient', category: 'Development Tools / IDEs' },
    { name: 'Arduino', icon: arduinoIcon, level: 'Proficient', category: 'Development Tools / IDEs' },

    // IoT & IIoT
    { name: 'Raspberry Pi', icon: raspberrypiIcon, level: 'Proficient', category: 'IoT & IIoT' },
    { name: 'IoT', icon: iotIcon, level: 'Proficient', category: 'IoT & IIoT' },
    { name: 'Node-RED', icon: noderedIcon, level: 'Proficient', category: 'IoT & IIoT' },
    { name: 'MQTT', icon: mqttIcon, level: 'Proficient', category: 'IoT & IIoT' },
    { name: 'EMQX', icon: emqxIcon, level: 'Intermediate', category: 'IoT & IIoT' },
    { name: 'Modbus', icon: modbusIcon, level: 'Intermediate', category: 'IoT & IIoT' },
    { name: 'OPC UA', icon: opcuaIcon, level: 'Intermediate', category: 'IoT & IIoT' },
    { name: 'Grafana', icon: grafanaIcon, level: 'Intermediate', category: 'IoT & IIoT' },

    // SCADA / Automation
    { name: 'Ignition', icon: ignitionIcon, level: 'Intermediate', category: 'SCADA / Automation' },

    { name: 'TIA Portal', icon: tiaportalIcon, level: 'Proficient', category: 'SCADA / Automation' },
    { name: 'Codesys', icon: codesysIcon, level: 'Proficient', category: 'SCADA / Automation' },

    // Databases
    { name: 'PostgreSQL', icon: postgresIcon, level: 'Proficient', category: 'Databases' },
    { name: 'TimescaleDB', icon: timescaledbIcon, level: 'Proficient', category: 'Databases' },
    { name: 'InfluxDB', icon: influxdbIcon, level: 'Proficient', category: 'Databases' },
    { name: 'MySQL', icon: mysqlIcon, level: 'Proficient', category: 'Databases' },
    { name: 'MongoDB', icon: mongodbIcon, level: 'Intermediate', category: 'Databases' },


    // Frameworks & Libraries
    { name: 'Node.js', icon: nodejsIcon, level: 'Intermediate', category: 'Frameworks & Libraries' },
    { name: 'NPM', icon: npmIcon, level: 'Intermediate', category: 'Frameworks & Libraries' },
    { name: 'Flask', icon: flaskIcon, level: 'Proficient', category: 'Frameworks & Libraries' },
    { name: 'React', icon: reactIcon, level: 'Intermediate', category: 'Frameworks & Libraries' },
    { name: 'OpenCV', icon: opencvIcon, level: 'Intermediate', category: 'Frameworks & Libraries' },

    // AI / ML
    { name: 'Ollama', icon: ollamaIcon, level: 'Proficient', category: 'AI / ML' },
    { name: 'TensorFlow', icon: tensorflowIcon, level: 'Beginner', category: 'AI / ML' },
    { name: 'PyTorch', icon: pytorchIcon, level: 'Beginner', category: 'AI / ML' },
    { name: 'HuggingFace', icon: huggingfaceIcon, level: 'Beginner', category: 'AI / ML' },

    // Containerization / DevOps
    { name: 'Docker', icon: dockerIcon, level: 'Intermediate', category: 'Containerization / DevOps' }
  ];

  const categories = [
    'Operating Systems',
    'Programming & Scripting',
    'Development Tools / IDEs',
    'IoT & IIoT',
    'SCADA / Automation',
    'Databases',
    'Frameworks & Libraries',
    'AI / ML',
    'Containerization / DevOps'
  ];

  const filterSkills = (skills) => {
    if (activeFilter === 'all') return skills;
    return skills.filter(skill => skill.level.toLowerCase() === activeFilter.toLowerCase());
  };

  const getSkillsByCategory = (category) => {
    return filterSkills(skillsData.filter(skill => skill.category === category));
  };

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <h2 className="section-title">Skills & Expertise</h2>

        {/* Filter Buttons */}
        <div className="skills-filter">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Skills
          </button>
          <button
            className={`filter-btn ${activeFilter === 'proficient' ? 'active' : ''}`}
            onClick={() => setActiveFilter('proficient')}
          >
            Proficient
          </button>
          <button
            className={`filter-btn ${activeFilter === 'intermediate' ? 'active' : ''}`}
            onClick={() => setActiveFilter('intermediate')}
          >
            Intermediate
          </button>
          <button
            className={`filter-btn ${activeFilter === 'beginner' ? 'active' : ''}`}
            onClick={() => setActiveFilter('beginner')}
          >
            Beginner
          </button>
        </div>

        {/* Poster/Infographic Mode */}
        <div className="poster-container">
          <div className="poster-grid">
            {categories.map((category, catIndex) => {
              const categorySkills = getSkillsByCategory(category);

              if (categorySkills.length === 0) return null;

              return (
                <div
                  key={category}
                  className="poster-section"
                  style={{ animationDelay: `${catIndex * 0.1}s` }}
                >
                  <div className="poster-header">
                    <div className="poster-number">{String(catIndex + 1).padStart(2, '0')}</div>
                    <h3 className="poster-title">{category}</h3>
                    <div className="poster-count">{categorySkills.length} Skills</div>
                  </div>
                  <div className="poster-skills">
                    {categorySkills.map((skill, index) => (
                      <div
                        key={skill.name}
                        className="poster-skill"
                        style={{ animationDelay: `${(catIndex * 0.1) + (index * 0.02)}s` }}
                      >
                        <img src={skill.icon} alt={skill.name} className="poster-icon" />
                        <div className="poster-info">
                          <span className="poster-skill-name">{skill.name}</span>
                          <span className={`poster-level ${skill.level.toLowerCase()}`}>
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

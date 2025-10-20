# Assets Folder Structure

## Current Structure

```
src/assets/
├── bharath_photo.jpeg    # Profile photo (used in Home component)
└── skills/               # All skill icons (39 images)
    ├── Arduino.png
    ├── Bash.png
    ├── Codesys_Logo.png
    ├── DBeaver.png
    ├── Docker.png
    ├── Embedded C.png
    ├── Fedora.png
    ├── Flask.png
    ├── GitHub.png
    ├── Grafana.png
    ├── InfluxDB.png
    ├── Linux.png
    ├── MongoDB.png
    ├── NPM.png
    ├── Nodejs.png
    ├── OpenCV.png
    ├── Postman.png
    ├── Powershell.png
    ├── PyTorch.png
    ├── Python.png
    ├── Raspberry Pi.png
    ├── React.png
    ├── Redis.png
    ├── TIA-Portal.jpg
    ├── TensorFlow.png
    ├── Ubuntu.png
    ├── Visual Studio Code (VS Code).png
    ├── Windows 11.png
    ├── huggingface.png
    ├── ignition.png
    ├── iot.png
    ├── modbus.png
    ├── mosquitto.png
    ├── mysql.png
    ├── nodered.png
    ├── opcua.png
    ├── postgres.png
    ├── siemens.png
    └── timescaledb.png
```

## How to Add More Images

### For Project Images:
1. Add images to `src/assets/` (e.g., `project1.jpg`, `project2.jpg`)
2. Import them in `src/components/Projects/Projects.jsx`:
   ```jsx
   import project1 from '../../assets/project1.jpg';
   ```
3. Replace `null` with the imported variable in the `projectsData` array

### For Certificate Images:
1. Add images to `src/assets/` (e.g., `cert1.jpg`, `cert2.jpg`)
2. Import them in `src/components/Certificates.jsx`:
   ```jsx
   import cert1 from '../assets/cert1.jpg';
   ```
3. Replace `null` with the imported variable in the `certificatesData` array

### For More Skills:
1. Add new skill icon to `src/assets/skills/`
2. Import it in `src/components/Skills.jsx`:
   ```jsx
   import skillIcon from '../assets/skills/SkillName.png';
   ```
3. Add to the `coreSkills` or `secondarySkills` array

## Currently Used:
- ✅ Profile Photo: `bharath_photo.jpeg`
- ✅ Skills Icons: 12 icons imported and displayed
- ⏳ Projects: Placeholders ready (add your project images)
- ⏳ Certificates: Placeholders ready (add your certificate images)

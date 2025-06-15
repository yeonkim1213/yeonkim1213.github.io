import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { skills } from '../data/skills';
import profileImage from './img/jaykim.png';

import { ReactComponent as ReactIcon } from '../data/skills/react.svg';
import { ReactComponent as JavascriptIcon } from '../data/skills/javascript.svg';
import { ReactComponent as TypescriptIcon } from '../data/skills/typescript.svg';
import { ReactComponent as NextjsIcon } from '../data/skills/nextjs.svg';
import { ReactComponent as HtmlIcon } from '../data/skills/html.svg';
import { ReactComponent as CssIcon } from '../data/skills/css.svg';
import { ReactComponent as BootstrapIcon } from '../data/skills/bootstrap.svg';
import { ReactComponent as ReactnativeIcon } from '../data/skills/reactnative.svg';
import { ReactComponent as ExpressjsIcon } from '../data/skills/expressjs.svg';
import { ReactComponent as DjangoIcon } from '../data/skills/django.svg';
import { ReactComponent as PythonIcon } from '../data/skills/python.svg';
import { ReactComponent as JavaIcon } from '../data/skills/java.svg';
import { ReactComponent as FastapiIcon } from '../data/skills/fastapi.svg';
import { ReactComponent as MysqlIcon } from '../data/skills/mysql.svg';
import { ReactComponent as MariadbIcon } from '../data/skills/mariadb.svg';
import { ReactComponent as MicrosoftsqlserverIcon } from '../data/skills/microsoftsqlserver.svg';
import { ReactComponent as AwsIcon } from '../data/skills/aws.svg';
import { ReactComponent as FirebaseIcon } from '../data/skills/firebase.svg';
import { ReactComponent as VscodeIcon } from '../data/skills/vscode.svg';
import { ReactComponent as GitIcon } from '../data/skills/git.svg';
import { ReactComponent as NpmIcon } from '../data/skills/npm.svg';
import { ReactComponent as YarnIcon } from '../data/skills/yarn.svg';
import { ReactComponent as PostmanIcon } from '../data/skills/postman.svg';
import { ReactComponent as FigmaIcon } from '../data/skills/figma.svg';
import { ReactComponent as SlackIcon } from '../data/skills/slack.svg';
import { ReactComponent as NotionIcon } from '../data/skills/notion.svg';
import { ReactComponent as NodejsIcon } from '../data/skills/nodejs.svg';

import bootstrapSvg from '../data/skills/bootstrap.svg';
import mariadbSvg from '../data/skills/mariadb.svg';

const iconMap = {
  'React': ReactIcon,
  'JavaScript': JavascriptIcon,
  'TypeScript': TypescriptIcon,
  'Next.js': NextjsIcon,
  'HTML': HtmlIcon,
  'CSS': CssIcon,
  'Bootstrap': BootstrapIcon,
  'React Native': ReactnativeIcon,
  'Node.js': NodejsIcon,
  'Express.js': ExpressjsIcon,
  'Django': DjangoIcon,
  'Python': PythonIcon,
  'Java': JavaIcon,
  'Fast API': FastapiIcon,
  'MySQL': MysqlIcon,
  'SQL': MicrosoftsqlserverIcon,
  'MariaDB': MariadbIcon,
  'AWS': AwsIcon,
  'Firebase': FirebaseIcon,
  'VSCode': VscodeIcon,
  'Git': GitIcon,
  'npm': NpmIcon,
  'yarn': YarnIcon,
  'Postman': PostmanIcon,
  'Figma': FigmaIcon,
  'Slack': SlackIcon,
  'Notion': NotionIcon,
};

const Header = () => {
  return (
    <header id="about" className="header">
      <div className="profile">
        <div className="left">
          <img 
            src={profileImage}
            alt="Jay Kim" 
            className="profile-img"
          />
          <h1>Jay Kim</h1>
          <p className="role">Full Stack Developer</p>
          <p className="desc">
            Hi there, I'm Jay 👋
            <br/>
            I'm a web software developer at the <a href="https://vdl.sci.utah.edu/" target="_blank" rel="noopener noreferrer">Visualization Design Lab (VDL)</a> at the <a href="https://www.utah.edu/" target="_blank" rel="noopener noreferrer">University of Utah</a>. I'm passionate about creating software that improves people's lives through thoughtful design and practical functionality.
            <br/>
            I earned my B.S. in Computer Science from the University of Utah in 2024, specializing in web and app development.
          </p>
          <div className="social">
            <a href="https://github.com/yeonkim1213" target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/ye0njaekim/" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
            <a href="mailto:yeonjae.kim.jay@gmail.com">
              <Mail />
            </a>
          </div>
        </div>
        <div className="right">
          <div className="skills">
            <h2>Skills</h2>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-category">
                <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                <div className="tags">
                  {items.map((item, i) => {
                    const Icon = iconMap[item];
                    return (
                      <span key={i} className="skill-tag">
                        {Icon && <Icon style={{ width: 20, height: 20, verticalAlign: 'middle', marginRight: 6 }} />}
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 
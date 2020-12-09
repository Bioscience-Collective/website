import Styles from '../styles/cmdBlock.module.sass'

const CMDLine = (props) => {
  return (
    <div className={[Styles.cmdBlock, "mt-3"].join(" ")}>
      <p className="cmdLine">
        <span className="text-green-500">➜</span>
        <span className="text-teal-300"> bsc</span>
        <span className="text-blue-500"> git:(</span>
        <span className="text-red-500 font-bold">main</span>
        <span className="text-blue-500">):</span>
        <span className="font-bold"> {props.cmd}</span>
      </p>
      {props.children}
    </div>
  );
};

const team = [
  {
    name: "Tobias Huang",
    link: "https://www.linkedin.com/in/tobias-huang-7134a4181/",
    role: "director/founder",
  },
  {
    name: "Claire_Wang",
    link: "https://www.linkedin.com/in/claire-bookworm/",
    role: "director/tech",
  }, 
  {
    name: "Yashas Ravi",
    link: "https://www.linkedin.com/in/yashas-ravi-789890200",
    role: "director/content",
  },
  {
    name: "Leila Blal",
    link: "https://google.com",
    role: "livestream",
  },
  {
    name: "Rohan S",
    link: "https://google.com",
    role: "content",
  },
  {
    name: "Sanjay Amrithaj",
    link: "https://google.com",
    role: "content",
  },
];

export default function Footer() {
  return (
    <div className="container mx-auto py-20 text-sm">
      <CMDLine cmd="echo $BSC_IDEAS">
        <p>
          Got ideas, projects, or connections that you wish to share with the? Let's talk! Tweet at{" "}
          <a className="font-bold" href="https://twitter.com/clairebookworm1">
            @clairebookworm1
          </a>{" "}
          or email{" "}
          <a className="font-bold" href="mailto:bioscicollective@gmail.com">
          bioscicollective@gmail.com.
          </a>
        </p>
      </CMDLine>
      <CMDLine cmd="wget $INVOLVED">
        <p>
          Interested in sponsoring us? Check out our{" "}
          <a className="font-bold" href="/docs/prospectus.pdf">
            prospectus
          </a>{" "}
          and reach out to{" "}
          <a className="font-bold" href="mailto:bioscicollective@gmail.com">
            bioscicollective@gmail.com
          </a>{" "}
          to discuss more!
        </p>
      </CMDLine>
      <CMDLine cmd="echo $BSC_FINANCE">
        <p>
          Bioscience Collective is fiscally sponsored by The Hack Foundation, a 501(c)(3) nonprofit. We pledge to make our finances 100% transparent.
        </p>
      </CMDLine>
      <CMDLine cmd="echo $DONATE">
        <p>
          We'd appreciate any support! Donate at <a href="https://bank.hackclub.com/donations/start/bioscience-collective">bank.hackclub.com/donations/start/bioscience-collective</a>! All donations are tax-deductible.
        </p>
      </CMDLine>
      <CMDLine cmd="cat /etc/passwd">
        {/* What a wonderful line of code... */}
        {team.map((member) => (
          <p key={member.name}>
            <a href={member.link}>{member.name}</a>:{member.role}
          </p>
        ))}
      </CMDLine>
      <CMDLine cmd="exit">
        <p>[ Process Completed ]</p>
      </CMDLine>
    </div>
  );
}

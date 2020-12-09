import Styles from '../styles/cmdBlock.module.sass'

const CMDLine = (props) => {
  return (
    <div className={[Styles.cmdBlock, "mt-3"].join(" ")}>
      <p className="cmdLine">
        <span className="text-green-500">➜</span>
        <span className="text-teal-300"> m3ta.io</span>
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
    name: "Mingjie_Jiang",
    link: "https://twitter.com/itsmingjie",
    role: "director",
  },
  {
    name: "Claire_Wang",
    link: "https://twitter.com/clairebookworm1",
    role: "marketing",
  },
  {
    name: "James_Click",
    link: "https://twitter.com/realJamesClick",
    role: "tech",
  },
];

export default function Footer() {
  return (
    <div className="container mx-auto py-20 text-sm">
      <CMDLine cmd="echo $M3TA_IDEAS">
        <p>
          Got ideas, projects, or connections that you wish to share with the
          entire hackathon organizers' community? Let's talk! Tweet at{" "}
          <a className="font-bold" href="https://twitter.com/itsmingjie">
            @itsmingjie
          </a>{" "}
          or email{" "}
          <a className="font-bold" href="mailto:mingjie@m3ta.io">
            mingjie@m3ta.io.
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
          <a className="font-bold" href="mailto:mingjie@m3ta.io">
            mingjie@m3ta.io
          </a>{" "}
          to discuss more!
        </p>
      </CMDLine>
      <CMDLine cmd="echo $M3TA_FINANCE">
        <p>
          M3TA is fiscally sponsored by The Hack Foundation, a 501(c)(3)
          nonprofit. We pledge to make our finances 100% tranpent after the
          event.
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

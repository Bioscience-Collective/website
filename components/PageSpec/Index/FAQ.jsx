const faqItems = [
    {
        title: "What is M3TA?",
        content: "M3TA is a meta-hackathon for hackathon organizers to write better tooling for future hackathon organizers. We want to gather hackathon organizers around the world to build the platforms that will power the next generations of hackathons."
    },
    {
        title: "I’m not an organizer. Can I attend M3TA?",
        content: "Yes! However, to ensure we are focusing our efforts solving the most imminent problems, we require more than 51% of your team to consist of event organizers for your team to be eligible for prizes."
    },
    {
        title: "I’ve organized an event, but I’ve never hacked!",
        content: "No worries! We know better than anyone that not everyone who organizes events have to be technical. We’re beginner friendly, as long as you come with the will to learn!"
    },
    {
        title: "What are the requirements for teams?",
        content: "We require more than 51% of your team to consist of event organizers for your team to be eligible for prizes. Teams consist of less than 5 hackers. All attendees must be currently enrolled in an academic institution."
    },
    {
        title: "What are the requirements for projects?",
        content: "We want M3TA to be an event where hackathon organizers come together to build open, accessible, and easy-to-use tools for future generations of organizers. Therefore, your project must be completely open-source (modification allowed), and it must aim to solve a real problem for hackathon organizers."
    },
    {
        title: "Will there be swag?",
        content: "Yes! We are going to try our best to ship swag to you, no matter where you are."
    },
    {
        title: "Do you expect me to ask questions that I shouldn’t have to ask?",
        content: "Yes! The event is completely free, hosted virtually (platform TBD), and yes, as long as you come with an idea, we’re happy to help you find a team!"
    },
    {
        title: "I’ve got something I wish to share with M3TA!",
        content: "Let's talk! Tweet at Mingjie, founder of M3TA, via @itsmingjie or email mingjie@m3ta.io. Mingjie is always happy to chat with you!"
    },
    {
        title: "I’ve got more questions!",
        content: `You know what to do: <a href="mailto:team@m3ta.io">team@m3ta.io</a>`
    },
]

export default function FAQ() {
    return (<>
        <h1 className="pt-10 text-3xl text-primary font-bold pb-3">
        FAQ
      </h1>
        {faqItems.map((faq) => (
            <div className={["pb-3"].join(' ')}>
                <h3 className="pb-1 font-bold text-teal-300">{faq.title}</h3>
                <p className="text-sm" dangerouslySetInnerHTML={{__html: faq.content}}></p>
            </div>
        ))}
    </>
    )
}
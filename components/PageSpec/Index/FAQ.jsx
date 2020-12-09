

const faqItems = [
    {
        title: "Biology Courses",
        content: "Designed for high school and college students, this course will take you through each facet of the intriguing world of life through inspiring articles and videos."
    },
    {
        title: "Local Groups",
        content: "Emphasizing the power of group learning and teamwork, members of local chapters perform and learn from numerous physical and virtual experiments."
    },
    {
        title: "Live Test Prep",
        content: "Resources for standardized exams, including AP/IB Biology, MCAT, and Biology Olympiad are available through livestreams. 2020-2021 ONLY!"
    },
    {
        title: "What are the requirements for new clubs?",
        content: "We require more than 51% of your team to consist of event organizers for your team to be eligible for prizes. Teams consist of less than 5 hackers. All attendees must be currently enrolled in an academic institution."
    },
    {
        title: "Will there be swag?",
        content: "Yes! We are going to try our best to ship swag to you, no matter where you are."
    },
    {
        title: "Do you expect me to ask questions that I shouldn’t have to ask?",
        content: "Yes! The event is completely free, hosted virtually (platform TBD), and yes, as long as you come with an idea, we’re happy to help you find a team!"
    },
]

export default function FAQ() {
    return (<>
        <h1 className="text-yellow-200 text-5xl font-bold space-y-2">
        FAQ
      </h1>
        {faqItems.map((faq) => (
            <div className={ ["pb-3 p-3"].join(' ')}>
                <h3 className="pb-1 text-lg font-bold text-white">{faq.title}</h3>
                <p className="text-base" dangerouslySetInnerHTML={{__html: faq.content}}></p>
            </div>
        ))}
    </>
    )
}
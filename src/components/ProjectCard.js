export default function ProjectCard() {
    return (
        <div className="project">
            <div className="project-title">
                <h2 className="">React Portfolio Website</h2>
            </div>

            <div className="project-description">
                <h3 className="">Опис проекту</h3>
                <p className="">
                    Це мій перший проект портфоліо, створений за допомогою React. Сайт демонструє мої навички веб-розробки та
                    включає інформацію про мої проекти.
                </p>
                <div className="tech-list">
                    <h4 className="">Використані технології:</h4>
                    <ul className="">
                        <li>React.js</li>
                        <li>Next.js</li>
                        <li>Tailwind CSS</li>
                        <li>HTML5 & CSS3</li>
                    </ul>
                </div>
            </div>

            <div className="work-area">
                <h3 className="">Робоча область</h3>
                <div className="">
                    <div className="feature-card">
                        <h4 className="">Функціональність</h4>
                        <ul className="">
                            <li>• Адаптивний дизайн</li>
                            <li>• Навігаційне меню</li>
                            <li>• Контактна інформація</li>
                            <li>• Валідний HTML/CSS код</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="author-card">
                <div className="author-section">
                    <h3 className="">Автор</h3>
                    <p className="">Владислав Денисенко</p>
                    <p className="">Frontend Developer</p>
                </div>
            </div>
        </div>
    )
}

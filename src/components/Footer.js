export default function Footer() {
    return (
        <footer>
            <p>© 2024 Моє Портфоліо. Всі права захищені.</p>
            <div className="footer-links">
                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                <a href="mailto:your.email@example.com" className="hover:text-gray-300 transition-colors">
                    Email
                </a>
                <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                >
                    LinkedIn
                </a>
            </div>
        </footer>
    )
}

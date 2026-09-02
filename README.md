# reddit clone

A production-ready reddit clone platform built with modern web technologies.

## Features
- Authentication & Authorization (NextAuth.js)
- Dashboard with analytics
- CRUD operations
- API routes with validation
- Database with Prisma ORM
- Responsive design with Tailwind CSS
- Unit tests with Jest
- CI/CD with GitHub Actions

## Tech Stack
| Technology | Purpose |
|------------|---------|
| Next.js 14 | React framework |
| React 18 | UI library |
| TypeScript | Type safety |
| Prisma | ORM |
| PostgreSQL | Database |
| NextAuth.js | Authentication |
| Tailwind CSS | Styling |
| Jest | Testing |
| GitHub Actions | CI/CD |

## Getting Started

### Prerequisites
- Node.js 20+
- PostgreSQL
- npm or yarn

### Installation

`ash
# Clone the repository
git clone https://github.com/KhalidKhan541/reddit-clone.git
cd reddit-clone

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
`

### Environment Variables

`env
DATABASE_URL=postgresql://user:password@localhost:5432/db
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
`

## Project Structure

`
src/
├── app/               # Next.js App Router
│   ├── auth/          # Authentication pages
│   ├── dashboard/     # Dashboard page
│   └── api/           # API routes
├── components/        # Reusable components
├── hooks/             # Custom hooks
├── lib/               # Utility libraries
└── utils/             # Helper functions
`

## API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/health | Health check |

## Testing

`ash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage
`

## Deployment

This project can be deployed on Vercel:

`ash
npm run build
npm start
`

## Contributing

1. Fork the repository
2. Create your feature branch (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m 'Add amazing feature')
4. Push to the branch (git push origin feature/amazing-feature)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**KhalidKhan541** - [GitHub](https://github.com/KhalidKhan541)

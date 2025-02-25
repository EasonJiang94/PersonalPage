# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Prerequisites

- Node.js (v20.10.0 or higher)
- npm (v10.2.3 or higher)

## Getting Started

1. Clone the repository
```bash=1
git clone <repository-url>
cd portfolio
```
2. Install dependencies
```bash
npm install
```
3. Create required update your personal info in 
`src/data/personalInfo.ts`
`src/data/education.ts`
`src/data/experience.ts`
`src/data/projects.ts`
4. Start the development server
```bash
npm run dev
```
<!-- ## Project Structure
portfolio/
├── src/
│ ├── app/ # Next.js app directory
│ ├── components/ # Reusable components
│ ├── sections/ # Page sections
│ ├── data/ # Data files
│ └── styles/ # Global styles
├── public/ # Static files
└── ...config files -->

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Deployment

### AWS S3 + CloudFront
1. install and setting aws config
```
brew install awscli 
# or 
# curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"  # Linux

aws configure
```

3. deploy
```bash
npm run deploy:aws
```

Make sure to configure AWS credentials before deploying.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
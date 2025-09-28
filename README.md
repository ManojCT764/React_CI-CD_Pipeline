
React CI/CD with GitHub Actions & Vercel
This project demonstrates a modern CI/CD (Continuous Integration and Continuous Deployment) workflow for a React application using GitHub Actions and Vercel.

CI/CD Overview
Continuous Integration (CI):
Every time you push code or open a pull request, GitHub Actions automatically runs your test suite to ensure your React app builds and passes all tests. This helps catch issues early and maintain code quality.

Continuous Deployment (CD):
When the CI workflow completes successfully, a separate CD pipeline is triggered. This pipeline downloads the production build artifacts and deploys them to Vercel, making your latest changes live automatically.

GitHub Actions Workflows
CI Workflow:

Installs dependencies
Runs tests using Vitest and React Testing Library
Builds the production-ready React app
Uploads the build artifacts for deployment
CD Workflow:

Waits for the CI workflow to complete
Downloads the production build artifacts
Deploys the app to Vercel using the Vercel CLI and a secure token stored in GitHub Secrets
Key Benefits
Automated Testing: Ensures code reliability with every change.
Seamless Deployment: No manual steps—production is always up to date.
Secure: Sensitive tokens are managed with GitHub Secrets.

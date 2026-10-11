  # Experiment 4: Implementing SSO Using Auth0

## 1. Create React Application

```bash
npm create vite@latest app-a -- --template react
cd app-a
npm install
```

Choose React and JavaScript if prompted.

## 2. Install Auth0

```bash
npm install @auth0/auth0-react
```

## 3. Configure Auth0

1. Create an account at https://auth0.com/
2. Create an application and select **Single Page Application**.
3. Configure these URLs in Auth0:

```text
Allowed Callback URLs:
http://localhost:5173

Allowed Logout URLs:
http://localhost:5173

Allowed Web Origins:
http://localhost:5173
```

4. Copy the Auth0 Domain and Client ID from the application settings.

## 4. Create `.env.local`

Create `.env.local` in the project root, where `package.json` is located.

```text
VITE_AUTH0_DOMAIN=YOUR_AUTH0_DOMAIN
VITE_AUTH0_CLIENT_ID=YOUR_CLIENT_ID
```

Replace the placeholders with your actual Auth0 values.

## 5. Configure `src/main.jsx`

Import `Auth0Provider` and wrap the `App` component with it. Use the Auth0 domain and client ID from `.env.local`.

## 6. Write `src/App.jsx`

Use `useAuth0()` to implement:

- Login button
- Welcome message displaying the user's name
- Logout button

## 7. Run the Application

```bash
npm run dev -- --port 5173
```

Open:

http://localhost:5173

Test Login, check the welcome message, and test Logout.

## 8. Push the Project to GitHub (First Time)

Create a GitHub repository named `auth0` without initializing a README.

```bash
git init
git add .
git commit -m "Add Auth0 SSO application"
git branch -M main
git remote add origin https://github.com/suruthisagar2007/auth0.git
git push -u origin main
```

## 9. Push Changes Later

```bash
git add .
git commit -m "Update Auth0 application"
git push
```

## Important Notes

- Keep `.env.local` in `.gitignore`.
- Never upload passwords or client secrets.
- If `remote origin already exists`, use:

```bash
git remote set-url origin https://github.com/suruthisagar2007/auth0.git
git push -u origin main
```

- If the project already exists, use `cd app-a` instead of creating it again.
- This procedure demonstrates Auth0 login in one application. Full SSO across multiple applications requires configuring a second application and testing shared authentication.

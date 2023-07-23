pipeline {
    agent any

    environment {
        PATH = "/opt/homebrew/bin:${env.PATH}"
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                echo "PATH is ${PATH}"
                System.setProperty("hudson.model.DirectoryBrowserSupport.CSP", "")
                sh '/opt/homebrew/bin/npx playwright test'
                archiveArtifacts artifacts: '**/playwright-report/*.html', fingerprint: true
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
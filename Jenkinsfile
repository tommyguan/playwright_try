pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                echo "Database engine is ${PATH}"
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
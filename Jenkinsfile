pipeline {
    agent any

    environment {
        PATH = ${PATH}+':/opt/homebrew/bin'
        DB_ENGINE    = 'sqlite'
    }

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
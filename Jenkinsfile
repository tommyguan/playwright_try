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
                sh '/opt/homebrew/bin/npx playwright test'
                archiveArtifacts artifacts: '**/playwright-report/*.html', fingerprint: true

                publishHTML (target : [allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Reports',
                reportTitles: 'Playwright test Report'])
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                withCredentials([usernamePassword(credentialsId: 'test_credential', usernameVariable: 'fooUser', passwordVariable: 'fooPassword')]) {
                echo "user is ${fooUser}"
}
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
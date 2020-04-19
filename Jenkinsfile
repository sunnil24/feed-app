
pipeline {
   agent any
   tools {nodejs "node"}
   stages {
      stage('Cloning Git') {
        steps {
          git 'https://github.com/sunnil24/hacker-feed-poc.git'
        }
      }
      stage('Build') {
         steps {
            echo 'Build started'
            sh 'npm install'
         }
      }
      stage('Testing') {
         steps {
            echo 'test started'
            sh 'npm run test:coverage'
            echo 'test finished'
         }
      }
      stage('Deployment') {
         steps {
            echo 'deployment started'
         }
      }
   }
}

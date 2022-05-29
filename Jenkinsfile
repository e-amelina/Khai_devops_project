pipeline {
  agent {
    docker {
      image 'node:16-alpine'
      args '-p 3000:3000'
    }
  }
  stages {
    stage('Install Dependencies') {
      steps {
        echo 'Installing'
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        echo 'Building'
        sh 'npm run build'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying'
        sh 'npm run srtart'
      }
    }
  }
}
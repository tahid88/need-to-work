npm run build
aws --region us-east-1 s3 sync out/ s3://code-review-gpt-fe  
aws --region us-east-1 cloudfront create-invalidation --distribution-id E2PS7UFCUH5XBA --paths "/*"

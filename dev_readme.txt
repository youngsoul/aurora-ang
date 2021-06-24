ng new aurora-ang
cd aurora-ang
ng serve --open

ng build

aws s3 sync dist/aurora-ang/ s3://pryan-spa-test-1 --profile spr

aws --region us-east-1 --profile spr cloudfront create-invalidation --distribution-id  E2SS2XIS0ASHOU --paths '/*'

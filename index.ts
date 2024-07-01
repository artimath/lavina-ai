/* eslint-disable @typescript-eslint/no-unused-vars */
import * as cloudflare from '@pulumi/cloudflare';
import * as pulumi from '@pulumi/pulumi';

const config = new pulumi.Config();
const accountID = config.require('cf-account-id');
const domain = config.require('domain');
// const errorDocument = config.get('errorDocument') || 'error.html';

// https://www.pulumi.com/registry/packages/cloudflare/api-docs/pagesproject/
const lavinaPages = new cloudflare.PagesProject('lavina_pages', {
	accountId: accountID,
	name: 'lavina-ai-pages',
	productionBranch: 'master',
	buildConfig: {
		buildCaching: false,
		buildCommand: 'exit 0',
		destinationDir: './www',
		rootDir: './',
	},
	deploymentConfigs: {},
	source: {
		config: {
			productionBranch: 'master',
			deploymentsEnabled: true,
			owner: 'artimath',
			prCommentsEnabled: true,
			repoName: 'lavina-ai',
		},
		type: 'github',
	},
});

// DNS Record

const helaixDomainZone = cloudflare.getZone({
	name: 'helaix.com',
	accountId: accountID,
});

const record = new cloudflare.Record('lavina.helaix.com', {
	name: domain,
	zoneId: helaixDomainZone.then((zone) => zone.id),
	type: 'CNAME',
	value: lavinaPages.subdomain,
});

// Pages Domain
const lavina_domain = new cloudflare.PagesDomain('lavina.helaix.com', {
	accountId: accountID,
	projectName: lavinaPages.name,
	domain: domain,
});

lavina_domain.domain.apply((domain) => console.log(domain));

// // Create a storage bucket and configure it as a website.
// const bucket = new gcp.storage.Bucket("bucket", {
//     location: "US",
//     website: {
//         mainPageSuffix: indexDocument,
//         notFoundPage: errorDocument,
//     },
// });

// // Create an IAM binding to allow public read access to the bucket.
// const bucketIamBinding = new gcp.storage.BucketIAMBinding("bucket-iam-binding", {
//     bucket: bucket.name,
//     role: "roles/storage.objectViewer",
//     members: ["allUsers"],
// });

// // Use a synced folder to manage the files of the website.
// const syncedFolder = new synced_folder.GoogleCloudFolder("synced-folder", {
//     path: path,
//     bucketName: bucket.name,
// });

// // Enable the storage bucket as a CDN.
// const backendBucket = new gcp.compute.BackendBucket("backend-bucket", {
//     bucketName: bucket.name,
//     enableCdn: true,
// });

// // Provision a global IP address for the CDN.
// const ip = new gcp.compute.GlobalAddress("ip", {});

// // Create a URLMap to route requests to the storage bucket.
// const urlMap = new gcp.compute.URLMap("url-map", {defaultService: backendBucket.selfLink});

// // Create an HTTP proxy to route requests to the URLMap.
// const httpProxy = new gcp.compute.TargetHttpProxy("http-proxy", {urlMap: urlMap.selfLink});

// // Create a GlobalForwardingRule rule to route requests to the HTTP proxy.
// const httpForwardingRule = new gcp.compute.GlobalForwardingRule("http-forwarding-rule", {
//     ipAddress: ip.address,
//     ipProtocol: "TCP",
//     portRange: "80",
//     target: httpProxy.selfLink,
// });

// // Export the URLs and hostnames of the bucket and CDN.
// export const originURL = pulumi.interpolate`https://storage.googleapis.com/${bucket.name}/index.html`;
// export const originHostname = pulumi.interpolate`storage.googleapis.com/${bucket.name}`;
// export const cdnURL = pulumi.interpolate`http://${ip.address}`;
// export const cdnHostname = ip.address;

import Issue from "../components/issue/Issue"

const issues = [
        {
            "id": "aXNzdWU6SV9rd0RPRnN5VlFNNUtubnIw",
            "issueType": "",
            "repository": "Ricochet-Exchange/ricochet-frontend",
            "respositoryAvatar": "https://avatars.githubusercontent.com/u/88621499?v=4",
            "title": "Trade History Page",
            "url": "https://github.com/Ricochet-Exchange/ricochet-frontend/issues/692"
        },
        {
            "id": "aXNzdWU6SV9rd0RPRlJtWENNNUtubUlU",
            "issueType": "",
            "repository": "reluce/szurubooru-toolkit",
            "respositoryAvatar": "https://avatars.githubusercontent.com/u/25018060?u=f9e0a12679f2ffc384fd53a4cac017234999d63d&v=4",
            "title": "Add image upscaling option",
            "url": "https://github.com/reluce/szurubooru-toolkit/issues/17"
        },
        {
            "id": "aXNzdWU6SV9rd0RPSEZmenpzNUtubUJY",
            "issueType": "",
            "repository": "before-commit/before-commit",
            "respositoryAvatar": "https://avatars.githubusercontent.com/u/102606206?v=4",
            "title": "Use a complete PEP440 conformant version parser",
            "url": "https://github.com/before-commit/before-commit/issues/63"
        },
        {
            "id": "aXNzdWU6SV9rd0RPQ0tJN1hjNUtubUF6",
            "issueType": "",
            "repository": "labring/sealos",
            "respositoryAvatar": "https://avatars.githubusercontent.com/u/102226726?v=4",
            "title": "sealctl cri default is containerd",
            "url": "https://github.com/labring/sealos/issues/1084"
        },
        {
            "id": "aXNzdWU6SV9rd0RPQ0tJN1hjNUtubHdV",
            "issueType": "",
            "repository": "labring/sealos",
            "respositoryAvatar": "https://avatars.githubusercontent.com/u/102226726?v=4",
            "title": "image interface refactor design",
            "url": "https://github.com/labring/sealos/issues/1083"
        },
        {
            "id": "aXNzdWU6SV9rd0RPSE1HU2c4NUtubFZy",
            "issueType": "",
            "repository": "adiatma85/golang-url-shortener",
            "respositoryAvatar": "https://avatars.githubusercontent.com/u/57523711?u=1842a07b9870c90505514603e17c7f0b2418cc1d&v=4",
            "title": "Change Password Encryption Logic",
            "url": "https://github.com/adiatma85/golang-url-shortener/issues/4"
        },
        {
            "id": "aXNzdWU6SV9rd0RPSFpkeHo4NUtubE1N",
            "issueType": "",
            "repository": "all-download/backend",
            "respositoryAvatar": "https://avatars.githubusercontent.com/u/106291205?v=4",
            "title": "YouTube Endpoint",
            "url": "https://github.com/all-download/backend/issues/6"
        },
        {
            "id": "aXNzdWU6SV9rd0RPSEZlUzVjNUtua19G",
            "issueType": "",
            "repository": "taskany-inc/issues",
            "respositoryAvatar": "https://avatars.githubusercontent.com/u/77788622?v=4",
            "title": "State component",
            "url": "https://github.com/taskany-inc/issues/issues/72"
        },
        {
            "id": "aXNzdWU6SV9rd0RPRlpvdlNzNUtua3pY",
            "issueType": "",
            "repository": "mrtztg/scribd_dl",
            "respositoryAvatar": "https://avatars.githubusercontent.com/u/76879732?u=6bea7c6971b36cac9d0a30f0ee3d8ff56dd86aa4&v=4",
            "title": "File \".\\scribd_dl.py\", line 114, in <module>",
            "url": "https://github.com/mrtztg/scribd_dl/issues/17"
        },
        {
            "id": "aXNzdWU6SV9rd0RPSEtPWUI4NUtuZ1pv",
            "issueType": "",
            "repository": "demokratie-live/desktop",
            "respositoryAvatar": "https://avatars.githubusercontent.com/u/32297937?v=4",
            "title": "🚀 Fallback page",
            "url": "https://github.com/demokratie-live/desktop/issues/12"
        }
      ]
export default function Issues () {
    return (
        <div className="p-8">
            Issues
            <div className="grid grid-cols-3 gap-4">
                {issues.map(issue => (
                    <Issue issue={issue} key={issue.id} />
                ))}
            </div>
        </div>
    )
}